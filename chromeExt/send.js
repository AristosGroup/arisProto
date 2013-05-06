chrome.tabs.getSelected(null,function(tab) {
    document.getElementById("description").innerText += "\n\n\n\n\"" + tab.title + "\":" + tab.url;
});

document.getElementById("form").onsubmit = function() {
    var subject = document.getElementById("subject").value;
    var key = localStorage["api_key"];
    var url = localStorage["api_url"];
    if(subject === ""){
        document.getElementById('result').innerHTML = "Error! You must specify a subject first.";
        return false;
    }
    if(!key || key === "" || !url || url === ""){
        document.getElementById('result').innerHTML = "Error! Could not retrieve dropdown information. Please visit the Send to Redmine Extension Options page.";
        return false;
    }

    json_data = {
        'issue' : {
            'subject': subject,
            'project_id': escape(document.getElementById("project").value),
            'tracker_id': escape(document.getElementById("tracker").value),
            'description': document.getElementById("description").value,
            'status_id': escape(document.getElementById("status").value),
            'priority': escape(document.getElementById("priority").value),
        }
    }
    // Send the HTTP request
    var submit_xhr = new XMLHttpRequest();
    submit_xhr.open("POST", url + "/issues.json", true);
    submit_xhr.setRequestHeader("X-Redmine-API-Key", key);
    submit_xhr.setRequestHeader("Content-type", "application/json");
    submit_xhr.send(JSON.stringify(json_data));
    submit_xhr.onreadystatechange = function () {
        var resp = JSON.parse(submit_xhr.responseText);
        if(submit_xhr.status == 201){
            document.getElementById('result').innerHTML = "Success! You can view the issue <a href=\""
                + url + "/issues/" + escape(resp.issue.id)
                + "/\" target=\"_blank\">here.</a> Issue ID is " + escape(resp.issue.id) + ".";
        }
        else {
            document.getElementById('result').innerHTML = "Error! " + escape(resp.errors);
        }
    }
    return false;
}

document.body.onload = function () {
    var key = localStorage["api_key"];
    var url = localStorage["api_url"];
    if(!key || key === "" || !url || url === ""){
        document.getElementById('result').innerHTML = "Error! Could not retrieve dropdown information. Please visit the Send to Redmine Extension Options page.";
        return false;
    }

    var project_xhr = new XMLHttpRequest();
    // Get the projects using the Redmine API Key.
    project_xhr.open("GET", url + "/projects.json", true);
    project_xhr.setRequestHeader("X-Redmine-API-Key", key);
    project_xhr.onreadystatechange = function() {
        if (project_xhr.readyState == 4) {
            // JSON.parse does not evaluate the attacker's scripts.
            var resp = JSON.parse(project_xhr.responseText);
            for(var i = 0; i < resp.projects.length; i++){
                var option = document.createElement("option");
                option.text = resp.projects[i].name;
                option.value = resp.projects[i].id;
                document.getElementById("project").add(option, null);
            }
        }
    }
    project_xhr.send();

    var tracker_xhr = new XMLHttpRequest();
    // Get the trackers using the Redmine API Key.
    tracker_xhr.open("GET", url + "/trackers.json", true);
    tracker_xhr.setRequestHeader("X-Redmine-API-Key", key);
    tracker_xhr.onreadystatechange = function() {
        if (tracker_xhr.readyState == 4) {
            var resp = JSON.parse(tracker_xhr.responseText);
            for(var i = 0; i < resp.trackers.length; i++){
                var option = document.createElement("option");
                option.text = resp.trackers[i].name;
                option.value = resp.trackers[i].id;
                document.getElementById("tracker").add(option, null);
            }
        }
    }
    tracker_xhr.send();

    var issue_statuses_xhr = new XMLHttpRequest();
    // Get the trackers using the Redmine API Key.
    issue_statuses_xhr.open("GET", url + "/issue_statuses.json", true);
    issue_statuses_xhr.setRequestHeader("X-Redmine-API-Key", key);
    issue_statuses_xhr.onreadystatechange = function() {
        if (issue_statuses_xhr.readyState == 4) {
            var resp = JSON.parse(issue_statuses_xhr.responseText);
            for(var i = 0; i < resp.issue_statuses.length; i++){
                var option = document.createElement("option");
                option.text = resp.issue_statuses[i].name;
                option.value = resp.issue_statuses[i].id;
                document.getElementById("status").add(option, null);
            }
        }
    }
    issue_statuses_xhr.send();
}