<%"---"%>
Position:
  - __POSITION__
Start_work: 
Location:
Command: __COMMAND__
<%"---"%>

# Characteristic

```meta-bind-button
style: primary
label: Create 121
action:
  type: js
  file: Scripts/buttons/121.js
```
# Open topics
```dataview
task
WHERE !completed and (contains(text, this.file.name) or contains(meta(section).subpath, this.file.name) )
group by meta(section).path + " (" + meta(section).subpath + ")"
```
# Done topics
```dataview
task
WHERE completed and ((contains(text, this.file.name) or contains(meta(section).subpath, this.file.name) ) or contains(file.name, this.file.name))
group by meta(section).path + " (" + meta(section).subpath + ")"
```
# 121-s
```dataview
table 
date
from "MeetingNotes/121" 
where contains(join(people), this.file.name)
```
# Other meetings with his
```dataview
table 
date, type
from "MeetingNotes" and !"MeetingNotes/121"
where contains(join(people), this.file.name)
```

