<template>
  <Layout>
    <p>
      <button class="btn btn-brand-yellow">Anmelden</button>
    </p>
    <p>
      Unsere Deutschkurse könnt ihr ab sofort Online besuchen. Trefft Elke,
      Laura & Kolleg_innen live in den virtuellen Work IT AUT Klassenzimmern.
    </p>
    <h4>CHECK IT AUT</h4>
    <p>
      Die Lebens- und Arbeitswelten sind in den letzten Monaten durcheinander
      geraten. Wir haben unser Projekt erweitert und freuen uns euch ab sofort
      unsere DAF/DAZ Kurse ONLINE & LIVE anbieten zu können.
    </p>
    <h4>ALLGEMEINE INFOS</h4>
    <p>
      Deutschkurse / Die Inhalte & Lehrunterlagen folgen den Vorgaben des
      Gemeinsamen Europäi- schen Referenzrahmen für Sprachen. Trainer_innen
      verfügen über DAF/DAZ Zertifizierung und /oder ÖIF (österreichischer
      Integrationsfond) Zertifizierung. Italienischkurse / Diese Kurse finden in
      Kooperation mit der One World Cagliari statt. www.oneworldcagliari.com
    </p>
  </Layout>
</template>

<script>
import Layout from '~/layouts/Default.vue'

export default {
  components: {
    Layout,
  },
  metaInfo: {
    title: 'Home',
  },
}
</script>

<style>
p {
  padding-top: 0.5em;
  padding-bottom: 2em;
  line-height: 1.5em;
  font-weight: 500;
}
h4 {
  color: #ffffff;
  line-height: 2em;
}
</style>
