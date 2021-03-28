<template>
  <div class="m-3">
    <a-divider orientation="left"> Left Text </a-divider>
    <a-button type="primary"> Primary </a-button>
    <a-button>Default</a-button>
    <a-button type="dashed"> Dashed </a-button>
    <a-button type="danger"> Danger </a-button>
    <a-button type="link"> Link </a-button>

    <a-divider orientation="left"> Left Text </a-divider>
    <a-button-group>
      <a-button>Cancel</a-button>
      <a-button type="primary"> OK </a-button>
    </a-button-group>

    <a-button-group>
      <a-button disabled> L </a-button>
      <a-button type="primary"> M </a-button>
      <a-button disabled> R </a-button>
    </a-button-group>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
