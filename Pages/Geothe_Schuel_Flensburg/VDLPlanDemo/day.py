import requests
import re

def _day(day):
    source_url = 'https://www.goethe.flensburg.de/files/vertretung/Leh_Dateien/Dateien/subst_00'+str(day)+'.htm'
    response = requests.get(source_url)
    source_html = response.text
    source_html = re.sub(r'style="background-color: #FFFFFF"', '', source_html)
    source_html = re.sub(r'<html>', '', source_html, flags=re.DOTALL)
    source_html = re.sub(r'<head>', '', source_html, flags=re.DOTALL)
    source_html = source_html.replace('<table class="mon_head">', '', 1)
    pattern = re.compile(r'<table class="info"[^>]*>(.*?)</table>', re.DOTALL)
    matches1 = pattern.findall(source_html)

    if matches1:
        for match in matches1:
            matches1_content = match
            matches1_content = matches1_content.replace('<tr class="info">', '<tr class="info_content">')
            matches1_content = matches1_content.replace("<tr class='info'>", '<tr class="info_content">')

            Raeume = re.compile(r'R.ume', re.DOTALL)
            Schulcafe = re.compile(r'Schulcaf.', re.DOTALL)
            Cafe = re.compile(r'Caf.', re.DOTALL)
            wuenschen = re.compile(r'w.nschen', re.DOTALL)
            schoene = re.compile(r'sch.ne', re.DOTALL)
            moeler = re.compile(r'M.lr', re.DOTALL)
            Fur = re.compile(r'F.r', re.DOTALL)
            fur = re.compile(r'f.r', re.DOTALL)
            Schueler = re.compile(r'Sch.ler', re.DOTALL)
            schueler = re.compile(r'sch.ler', re.DOTALL)
            Soe = re.compile(r'S[^a-zA-Z]', re.DOTALL)
            Due = re.compile(r'D[^a-zA-Z]', re.DOTALL)
            eigenstaendig = re.compile(r'eigenst.ndig', re.DOTALL)
            Krueger = re.compile(r'Kr.ger', re.DOTALL)
            Praeventionsveranst = re.compile(r'Pr.ventionsveranst', re.DOTALL)

            matches1_content = re.sub(Raeume, "R&#228;ume", matches1_content)
            matches1_content = re.sub(Schulcafe, "Schulcaf&#233; ", matches1_content)
            matches1_content = re.sub(Cafe, "Caf&#233; ", matches1_content)
            matches1_content = re.sub(wuenschen, "w&#252;nschen", matches1_content)
            matches1_content = re.sub(schoene, "sch&#246;ne", matches1_content)
            matches1_content = re.sub(moeler, "M&#246;lr", matches1_content)
            matches1_content = re.sub(Fur, "F&#252;r", matches1_content)
            matches1_content = re.sub(fur, "f&#252;r", matches1_content)
            matches1_content = re.sub(Schueler, "Sch&#252;ler", matches1_content)
            matches1_content = re.sub(schueler, "sch&#252;ler", matches1_content)
            matches1_content = re.sub(Soe, "S&#246;", matches1_content)
            matches1_content = re.sub(Due, "D&#252;", matches1_content)
            matches1_content = re.sub(eigenstaendig, "eigenst&#228;ndig", matches1_content)
            matches1_content = re.sub(Krueger, "Kr&#252;ger", matches1_content)
            matches1_content = re.sub(Praeventionsveranst, "Pr&#228;ventionsveranst", matches1_content)
    else:
        print("Muster nicht gefunden.1")
    pattern = re.compile(r'<table class="mon_list"[^>]*>(.*?)</table>', re.DOTALL)
    matches2 = pattern.findall(source_html)
    if matches2:
        for match in matches2:
            matches2_content = match
            Cafe1 = re.compile(r'Caf[^a-zA-Z] 1', re.DOTALL)
            Cafe2 = re.compile(r'Caf[^a-zA-Z] 2', re.DOTALL)

            matches2_content = re.sub(Cafe1, "Caf&#233; 1", matches2_content)
            matches2_content = re.sub(Cafe2, "Caf&#233; 2", matches2_content)

    else:
        print("Muster nicht gefunden.2")
    
    with open('day'+str(day)+'_header.txt', 'w') as f:
        f.write(matches1_content)
    print("Done 'subst_00"+str(day)+"' Header")
    with open('day'+str(day)+'.txt', 'w') as f:
        f.write(matches2_content)
    print("Done 'subst_00"+str(day)+"' Content")
    print("")



_day(1)
_day(2)
_day(3)
_day(4)
_day(5)