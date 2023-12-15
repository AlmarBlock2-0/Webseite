import requests
import re

source_url = 'https://www.goethe.flensburg.de/files/vertretung/Leh_Dateien/Dateien/subst_001.htm'
response = requests.get(source_url)
source_html = response.text
source_html = re.sub(r'style="background-color: #FFFFFF"', '', source_html)
source_html = re.sub(r'<html>', '', source_html, flags=re.DOTALL)
source_html = re.sub(r'<head>', '', source_html, flags=re.DOTALL)
source_html = source_html.replace('<table class="mon_head">', '', 1)
pattern = re.compile(r'<table class="mon_list"[^>]*>(.*?)</table>', re.DOTALL)
matches = pattern.findall(source_html)
if matches:
    for match in matches:
        source_html = match
else:
    print("Muster nicht gefunden.")
with open('day1.txt', 'w') as f:
    f.write(source_html)