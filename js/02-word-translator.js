let languageCode = prompt("Enter a language code (es, de, en or fr)");
switch (languageCode) {
    case "es":
        document.write("Hello World translated in Spanish is: Hola mundo");
        break;
    case "de":
        document.write("Hello World translated in German is: Hallo welt");
        break;
    case "fr":
        document.write("Hello World translated in French is: Bonjour le monde");
        break;
    default:
        document.write("Hello World translated in English is: Hello world");
}