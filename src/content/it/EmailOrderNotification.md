Anmeldung für ${name}
--------

${email} hat sich interessiert für **${name}: ${subtitle}**

- an den Tagen: ${days}
- aktueller Preis: ${cost}

**Beschreibungstext**:

${description}


Beispiele für Felder die verwendet werden k̨önnen:
===================================================

(das sind die felder aus der offers/courses: Abos.yaml und )
+ email des kundens: ${email}

```yaml
zB.:
offers:
  - ...
  courses:
      - name: Corso di tedesco intensivo pre-intermedio
        subtitle: Per le professioni alberghiere | JUNIORgoPRO
      description: |-
```

Name
----

  ${name} 

Subtitle
----
  ${subtitle}



Kosten: ${cost}

Description:
${description}



Tage(derzeit meistens leer): ${days}


