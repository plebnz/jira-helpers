function hide() {
    try {
        var contentElements = document.querySelectorAll(`[data-test-id="issue.views.issue-details.issue-layout.right-most-column"]`);
        if (!contentElements || contentElements.length < 1)
        {
            console.log("No content nodes returned to modify");
            return;
        }
        let contentElement = contentElements[0];
        if (!contentElement) {
            console.log("No content to modify");
            return;
        }
        var parentElement = contentElement.parentElement;
        if (!parentElement) {
            console.log("No parent to modify");
            return;
        }
        if (parentElement.classList.contains("hidden")) {
            parentElement.classList.remove("hidden");
        } else {
            parentElement.classList.add("hidden");
        }
    } catch (error) {
        console.log("Cannot locate or hide element " + error);
    }
}

hide();