<template lang="pug">
Layout
  Landing(:value="{...content, translateLink: '/de/'}")
</template>
<script>
import Landing from '~/components/Landing.vue'
import landing from '~/content/it/Index.yaml'
import {message} from '~/content/it/Interface.yaml'

export default {
  components: {
    Landing,
  },
  metaInfo: {
    title: 'Benvenuti',
  },
  data() {
    return {
      content: {
        ...landing,
        messages: message,
      },
    }
  },
}
</script>
