const newPersonStr = "New person"
const stopWordStr = "Done";

function join(...partSegments) {
    // Split the inputs into a list of path commands.
    let parts = [];
    for (let i = 0, l = partSegments.length; i < l; i++) {
      parts = parts.concat(partSegments[i].split("/"));
    }
    // Interpret the path commands to get the new resolved path.
    const newParts = [];
    for (let i = 0, l = parts.length; i < l; i++) {
      const part = parts[i];
      // Remove leading and trailing slashes
      // Also remove "." segments
      if (!part || part === ".") continue;
      // Push new path segments.
      else newParts.push(part);
    }
    // Preserve the initial slash if there was one.
    if (parts[0] === "") newParts.unshift("");
    // Turn back into a single string path.
    return newParts.join("/");
}

async function getNotePath(tp, directory, filename)  {
    if (!filename.endsWith(".md")) {
      filename += ".md";
    }
    const path = tp.obsidian.normalizePath(join(directory, filename));
  
    if (await app.vault.getAbstractFileByPath(path)) {
        return path
    }
  
    return "";
}

async function appendDaily(tp, txt) {
    if (txt == null || txt == "") {
        txt = "# [[" + tp.file.path(true) + "|" + tp.file.title.replace(/\d+$/, "") + "]]";
    }
    const { folder, format } = app.internalPlugins.getPluginById("daily-notes").instance.options;
    const filename = moment().format(format);
    const normalizedPath = await getNotePath(tp, folder, filename);
    
    if (normalizedPath != "") {
        app.vault.adapter.append(normalizedPath, txt + "\n");
    }
}

function createQuickAddTemplateChoice(name) {
    return {
        id: crypto.randomUUID(),
        name: name,
        type: "Template",
        command: false,

        templatePath: "templates/" + name + ".md",
        fileNameFormat: { enabled: true, format: name },
        folder: {
            enabled: true,
            folders: ['MeetingNotes/' + name],
            chooseWhenCreatingNote: false,
            createInSameFolderAsActiveFile: false,
            chooseFromSubfolders: false,
        },
        appendLink: false,
        openFileInNewTab: {
            enabled: false,
            direction: "vertical",
            focus: true,
        },
        openFile: true,
        openFileInMode: "default",
        fileExistsMode: "Increment the file name",
        setFileExistsBehavior: true
    }
}

function getPeoples() {
    return app.vault.getFiles().filter(file => file.path.includes("people/") && file.extension=="md" && file.basename != 'peoples').map(tFile => tFile.basename).sort();
}

function getTP() {
    return app.plugins.plugins['templater-obsidian'].templater.current_functions_object;
}

async function createPeopleCard(tp) {
    const name = "@" + await tp.system.prompt("Name");
    const position = await tp.system.prompt("Position");
    const command = await tp.system.prompt("Command");
    const contentTemplate = await app.vault.read(tp.file.find_tfile("core/people card"));

    await tp.file.create_new(
        contentTemplate.replace(/__POSITION__/g, position).replace(/__COMMAND__/g, command), 
        "people/" + name, 
        true
    );

    return name;
}

async function processPeopleSuggester(tp, params) {
    const checkedSymbol = "✅";
    let items = getPeoples().map((item) => params.peoples.indexOf(item) != -1 ? `${checkedSymbol} ${item}` : item);

    items.unshift(newPersonStr);
    if (!params.onlyOne) {
        items.unshift(stopWordStr);
    }

    let people = await tp.system.suggester((item) => item, items);
    if (people === newPersonStr) {
        people = await createPeopleCard(tp)
    }

    if (people === stopWordStr) {
        return true;
    } else {
        let peoples_new = params.peoples.filter((item) => `${checkedSymbol} ${item}` !== people);
        if (peoples_new.length == params.peoples.length) {
            peoples_new.push(people);
        }

        params.peoples = peoples_new;
    }

    return false;
}

async function peopleSuggester(tp) {
    let params = {peoples: [], onlyOne: true};

    await processPeopleSuggester(tp, params);

    return params.peoples[0];
}

async function peoplesSuggester(tp) {
    let params = {peoples: [], onlyOne: false};

    while(!await processPeopleSuggester(tp, params)){}

    return params.peoples;
}

module.exports = {
    appendDaily: appendDaily,
    createQuickAddTemplateChoice: createQuickAddTemplateChoice,
    getTP: getTP,
    peopleSuggester: peopleSuggester,
    peoplesSuggester: peoplesSuggester,
    createPeopleCard: createPeopleCard
}