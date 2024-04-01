const {createPeopleCard, getTP} = require(app.vault.adapter.basePath + "/Scripts/utils.js")

async function createCard() {
    return await createPeopleCard(getTP());
}

module.exports = createCard