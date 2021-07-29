// Let's override the colors depending on the grade
function updateTreeClasses(treePlugin) {
    treePlugin.getPanningContainer().selectAll("g.node")
        .attr("class", function(data, index, arr) {

            var grade = data.data.grade;

            if (grade == null) {
                var grade_class = "parent";
            } else if (grade > 65) {
                var grade_class = "good_grade";
            } else {
                var grade_class = "bad_grade";
            }

            // Add the grade CSS class on top of the other tree node classes
            // if required
            var existingClasses = this.getAttribute("class");
            if (!existingClasses)
                return grade_class;
            var hasClassAlready = (" " + existingClasses + " ").indexOf(" " + grade_class + " ") > -1;
            if (hasClassAlready)
                return existingClasses;
            return existingClasses + " " + grade_class;
        });
}


