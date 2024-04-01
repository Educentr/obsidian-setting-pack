const {appendDaily, peopleSuggester, getTP} = require(app.vault.adapter.basePath + "/Scripts/utils.js")

async function create_121(param) {
    let name = ""
    const tp = getTP();
    
    if (typeof(param) === "string") {
        name = param
    } else {
        name = await peopleSuggester(tp);
    }

    const ttp = tp.file.find_tfile("core/121");
    const fttp = await app.vault.read(ttp);
    const note121name = "MeetingNotes/121/" + name + "-" + tp.date.now("YYYY-MM-DD")

    await appendDaily(tp, "# [[" + note121name + "|121 with " + name + "]]")
    
    s = fttp.replace(/__PEOPLE__/g, "[[" + name + "]]");
    tp.file.create_new(s, note121name, true);
}

module.exports = create_121;