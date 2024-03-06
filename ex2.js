/*
Given an absolute file path (from a Linux or Unix-based system):
Create a function that simplifies it.
 
Example:
simplifyPath("/home/");             // Output: /home
simplifyPath("/x/./y/../../z/");    // Output: /z
simplifyPath("/../");               // Output: /
simplifyPath("/home//test/");    // Output: /home/test
*/

/* EXERCISE */
function simplifyPath(path) {
    // Create var for save route parts
    let pile = [];
    // Divide path in differents parts
    const parts = path.split('/');
    // Traverse each part
    for(const part of parts) {
     // If is ".." -> remove last element
        if(part === "..") {
            pile.pop();
        } 
        // If not is ".", ".." or " " -> save pile
        else if(part !== "." && part !== "") {
            pile.push(part);
        }
    }
    
    return '/' + pile.join("/");
}

module.exports = simplifyPath;
