# Topics for this meeting
```dataview
task
where contains(text, "#" + this.filtertag) and !completed and (scheduled <= date(this.date) or scheduled = nil) and nonnull(frontmatter.date, striptime(file.ctime))[0] <= this.date
group by meta(section).path + " (" + meta(section).subpath + ")"
```
```dataview
task
WHERE completed and contains(text, "#" + this.filtertag) and completion = striptime(this.date)
GROUP BY meta(section).path + " (" + meta(section).subpath + ")"
```
# Tasks from previouses meeting
```dataview
task
where !completed and contains(file.folder, this.file.folder) and (scheduled <= date(this.date) or (scheduled = nil)) and nonnull(frontmatter.date, striptime(file.ctime))[0] < this.date
group by meta(section).path + " (" + meta(section).subpath + ")"
```
```dataview
task
where completed and contains(file.folder, this.file.folder) and completion = striptime(this.date)
group by meta(section).path + " (" + meta(section).subpath + ")"
```
