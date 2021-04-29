<template>
    <div class="flex items-center justify-center h-screen">
        <p class="text-3xl text-gray-700">{{msg}}</p>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  setup() {
    let msg = 'Hello world!'
    return {
      msg
    }
  }
}
</script>