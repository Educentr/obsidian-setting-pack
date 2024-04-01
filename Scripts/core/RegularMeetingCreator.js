const {createQuickAddTemplateChoice, peoplesSuggester, getTP} = require(app.vault.adapter.basePath + "/Scripts/utils.js")

async function create_regular_tmpl() {
    const tp = getTP();
    const name = await tp.system.prompt("Name");
    const tag_name = await tp.system.prompt("Tag name");

    const peoples = await peoplesSuggester(tp);

    const fileTemplate = tp.file.find_tfile("core/RegularMeeting");
    const contentTemplate = await app.vault.read(fileTemplate);
    const newTemplate = "templates/user/" + name
    s = contentTemplate.replace(/__PEOPLES__/g, peoples.map((item) => `  - "[[${item}]]"`).join("\n")).replace(/__PEOPLES_HEADER__/g, peoples.map((item) => `# [[${item}]]:`).join("\n")).replace(/__TAG__/g, tag_name);
    tp.file.create_new(s, newTemplate, true);
    app.plugins.plugins['quickadd'].settings.choices.push(createQuickAddTemplateChoice(name));
    await app.plugins.plugins['quickadd'].saveSettings();
}

module.exports = create_regular_tmpl;