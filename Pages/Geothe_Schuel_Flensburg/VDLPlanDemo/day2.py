import requests
import re

# URL der Quellseite
source_url = 'https://www.goethe.flensburg.de/files/vertretung/Leh_Dateien/Dateien/subst_002.htm'

# Anfrage an die Quellseite senden und den HTML-Inhalt abrufen
response = requests.get(source_url)
source_html = response.text

# Remove every occurrence of 'style="background-color: #FFFFFF"'
source_html = re.sub(r'style="background-color: #FFFFFF"', '', source_html)

# Remove every occurrence of '<meta(.*?)$'
source_html = re.sub(r'<html>', '', source_html, flags=re.DOTALL)
source_html = re.sub(r'<head>', '', source_html, flags=re.DOTALL)
# Remove the first occurrence of '<table class="mon_head">'
source_html = source_html.replace('<table class="mon_head">', '', 1)
#source_html = re.sub(r'<title>(.*?)$', '', source_html, flags=re.DOTALL)
# Keep only the content that matches the regex '<table(.*?)$'
pattern = re.compile(r'<table class="mon_list"[^>]*>(.*?)</table>', re.DOTALL)

# Suche nach dem Muster im Text
matches = pattern.findall(source_html)

# Überprüfe, ob das Muster gefunden wurde
if matches:
    for match in matches:
        source_html = match
else:
    print("Muster nicht gefunden.")

#save html to file.json
with open('day2.txt', 'w') as f:
    f.write(source_html)