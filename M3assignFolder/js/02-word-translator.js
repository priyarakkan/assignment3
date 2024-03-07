let lang = prompt('Enter your language (es|de|en|fr): ')

if (lang === 'es') {
    document.write('Hola mundo!')
} else if (lang === 'de') {
    document.write('Hallo welt!')
} else if (lang === 'en') {
    document.write('Hello world!')
} else if (lang === 'fr') {
    document.write('Bojour le monde!')
} else {
    document.write('Hello world!')
}