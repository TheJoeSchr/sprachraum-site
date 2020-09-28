<template>
  <div class="bg-white border rounded-lg overflow-hidden">
    <g-image :alt="item.imageAlt" :src="item.imageUrl">
      <div class="p-6">
        <div class="flex items-baseline">
          <span
            class="inline-block bg-teal-200 text-teal-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide"
            >{{ item.title }}
          </span>
        </div>
        <!-- <h4 class="mt-1 font-semibold text-lg leading-tight truncate">
        {{ item.title }}
      </h4> -->
        <div class="mt-2 flex items-center">
          <span class="ml-2 text-gray-600 text-sm">{{ item.content }} </span>
        </div>
      </div>
    </g-image>
  </div>
</template>

<script>
export default {
  props: ['item'],
}
</script>
