# Completed tasks from previous date
```dataviewjs
const tasks = await dv.query(`task
FROM "/"
WHERE completed and (completion = date(this.file.name) - dur(1 d) or (dateformat(date(this.file.name), "E") = "1" and completion = date(this.file.name) - dur(3 d)))
group by file.name`);

if (tasks.value && tasks.value.values) {
	dv.paragraph("Всего: " + tasks.value.values.length)
} else {
	dv.paragraph("Нет выполненных задач")
}
```
```dataview
task
FROM "/"
WHERE completed and (completion = date(this.file.name) - dur(1 d) or (dateformat(date(this.file.name), "E") = "1" and completion = date(this.file.name) - dur(3 d)))
group by file.name
```
# Topics for current daily meeting
```dataview
task
FROM "MeetingNotes" or "Daily Notes"
WHERE !completed and date(file.name) < date(this.file.name) and (due <= date(this.file.name) or (due = nil)) and contains(text, "#daily")
group by meta(section).path + " (" + meta(section).subpath + ")"
```
# Tasks for today
```dataviewjs
const tasks = await dv.query(`task
FROM "MeetingNotes" or "Daily Notes"
WHERE !completed and date(file.name) < date(this.file.name) and (due <= date(this.file.name) or (due = nil))
group by meta(section).path + " (" + meta(section).subpath + ")"`);

if (tasks.value && tasks.value.values && tasks.value.values.length > 0) {
	dv.paragraph("Total: " + tasks.value.values.length)
} else {
	dv.paragraph("None")
}
```
```dataview
task
FROM "MeetingNotes" or "Daily Notes"
WHERE !completed and date(file.name) < date(this.file.name) and (due <= date(this.file.name) or (due = nil))
group by meta(section).path + " (" + meta(section).subpath + ")"
```
# Tasks that appeared during the day
---
# Daily-meeting notes

---
