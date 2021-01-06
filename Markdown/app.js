function updatePreview() {
    let previewElement = document.getElementById("preview");
    let editorValue = document.getElementById("editor").value;
    let markedHTML = marked(editorValue);
    previewElement.innerHTML = markedHTML;
}
window.onload = setDefault();

function setDefault() {
    let defaultText = `\
# FreeCode Camp
## Markdown Previewer
[Learn to code with FreeCode Camp](https://www.freecodecamp.org).
<dl>
    <dt>Default List</dt>
    <dd>Is something people use sometimes</dd>
    <dt>FreeCode Camp Projects</dt>
    <dd>Are</dd>
    <dd>Fun</dd>
</dl>

some code and stuff \`<div></div>\` but remember to use backticks, not quotation marks

\`\`\`
function factorialize(num){
    if(num === 0){
        return num}
    }
        return num * factorlize(num - 1);
};
\`\`\`

- Code
- All
- Day
- And
- Make
- Great
- Things

![FreeCode Camp](https://res.cloudinary.com/prblack/image/upload/v1609970725/WebAssets/photos-free-code-camp-philly-philadelphia-pa-meetup-freecodecamp-png-480_480.jpg_rhpmki.png)

**Here is some bolded text for this project**

As Nas said:
> "Life's a bi*ch and then you die"

`;

    let editorField = document.getElementById("editor");
    let previewElement = document.getElementById("preview")
        editorField.value = defaultText;
        previewElement.innerHTML = marked(defaultText)
}

// Compile
console.log(marked("# Hello Palo"));