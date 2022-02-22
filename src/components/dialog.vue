<template>
  <div
    v-show="visible"
  >
    <div class="ui-mark"></div>
    <div
      class="ui-dialog"
      :style="getStyles()"
    >
      <div class="ui-dialog-container">
        <div class="ui-dialog-header">
          <div class="ui-dialog-title">{{title}}</div>
          <button
            type="button"
            @click="close()"
          >close</button>
        </div>
        <div class="ui-dialog-body" :style="{height:height}">
          <slot name="body"></slot>
        </div>
        <div class="ui-dialog-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  name: "v-dialog",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "测试",
    },
    width: {
      type: Number,
      default: 300
    },
    height: {
      type: Number,
      default: 100
    },
  },

  methods: {
    getStyles() {
      let obj = {};
      //{ width: this.width + "px", height: this.height };
      obj["width"] =
        Object.prototype.toString.call(this.width) == "[object Number]"
          ? this.width + "px"
          : this.width;
      //obj["height"] = this.height + "px";

      let height_half = this.height/2;
      obj["top"] = "calc( 50vh - "+height_half+")";
          
      return obj;
    },
    close(event) {
      this.$emit("close");
    }
  },
  mounted() {
   
  },
};
</script>