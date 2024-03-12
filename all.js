import { GoogleGenerativeAI } from 'https://esm.run/@google/generative-ai';
document.getElementById('generateButton').addEventListener('click', oky);
document.getElementById('copy').addEventListener('click', copyText);

function oky(){
    var codePrompt = document.getElementById('codePrompt').value
    var lang = document.getElementById('lang').value
    console.log(codePrompt)
    console.log(lang)
    async function run() {
        const API_KEY = "Your_Gemini_API";
        const genAI = new GoogleGenerativeAI(API_KEY);
        
        // For text-only input, use the gemini-pro model
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        
        const prompt = `Write a ${lang} code for this question : ${codePrompt}`;
        
        try {
            const result = await model.generateContent(prompt);
            const response = await result.response;
            const data = await response.text();
            console.log(data)
            var codeElement = document.querySelector('.result')
            codeElement.innerHTML = `<pre>${data}</pre>`
            var text = codeElement.innerHTML
            //copy  to clipboard button functionality
        } catch (error) {
            console.error("Error:", error);
        }
    }
    run();
}

