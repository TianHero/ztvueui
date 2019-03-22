<template>
  <transition name="fade">
    <div class="xm__dialog--wrap" v-show="isVisible" ref="modal" >
      <div class="xm__mask" @click="maskClose"></div>
      <div class="xm__dialog">
        <div class="xm__dialog--close" v-show="closeShow" @click="close"  :style="{'top': '10px','right': '10px'}">
          <img src="//img.pipacoding.com/assets/new4_landingpage/close.png" :style="{'width': '12px','height': '12px'}">
        </div>
        <div v-if="title" class="xm__dialog--hd" :style="{'fontSize': titleSize,'paddingTop':titlePaddingTop,'paddingBottom': titlePaddingBottom }">
          <strong class="xm__dialog--title" v-if="title">{{title}}</strong>
        </div>
        <div class="xm__dialog--bd" v-if="type=='prompt'">
          <xm-input v-model="promptValue" :placeholder="placeholder" :readonly="readonly" class="xm__dialog--bd-input"></xm-input>
        </div>
        <div class="xm__dialog--bd" v-else :style="{'fontSize': contentFontSize,'margin': contentMargin}">
          {{content}}
        </div>
        <div class="xm__dialog--ft">
          <div v-if="!type||type=='alert'">
            <xm-button @click="confirm" :style="{'color': btnColor,'fontSize': contentFontSize,'paddingTop': btnPaddingTop,'paddingBottom': btnPaddingBottom,'fontWeight':'blod'}" long>{{btnContent}}</xm-button>
          </div>
          <div v-else-if="type=='confirm'">
          <xm-button-group class="xm__btn--group" >
            <xm-button :style="{'fontSize': contentFontSize,'paddingTop': btnPaddingTop}" @click="close">取消</xm-button>
            <xm-button  @click="confirm" :style="{'color': btnColor,'fontSize': contentFontSize,'paddingTop': btnPaddingTop, 'paddingBottom':btnPaddingTop}">确定</xm-button>
          </xm-button-group>
          </div>
          <div v-else-if="type=='prompt'">
          <xm-button-group class="xm__btn--group" >
            <xm-button @click="close">取消</xm-button>
            <xm-button @click="confirm" :style="{'color':btnColor}">确定</xm-button>
          </xm-button-group>
          </div>
          
        </div>
      </div>
      
    </div>
  </transition>
</template>

<script>
import xmButton from '../button'
import xmButtonGroup from '../buttongroup'
import ModalMixin from './ModalMixin'
export default {
  mixins: [ModalMixin],
  components: {
    xmButton,
    xmButtonGroup
  },
  props: {
    type: {
      type: String,
      default: 'alert'
    },
    btnContent: {
      type: String,
      default: '确定'
    },
    value: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    btnColor: {
      type: String,
      default: '#EE6D0F'
    },
    btnFontSize: {
      type: String,
      default: '17px'
    },
    contentFontSize: {
      type: String,
      default: '17px'
    },
    contentMargin: {
      type: String,
      default: '20px 15px'
    },
    btnPaddingTop: {
      type: String,
      default: '16px'
    },
    btnPaddingBottom: {
      type: String,
      default: '19px'
    },
    placeholder: {
      type: String,
      default: ''
    },
    readonly: Boolean,
    maskClosable: {
      type: Boolean,
      default: false
    },
    content: String,
    autoClose: {
      type: Boolean,
      default: false
    },
    callBack: {
      type: Function,
      default () {}
    },
    okCallBack: {
      type: Function,
      default () {}
    },
    cancelCallBack: {
      type: Function,
      default () {}
    },
    titleSize: {
      type: String,
      default: '16px'
    },
    titlePaddingTop: {
      type: String,
      default: '15px'
    },
    titlePaddingBottom: {
      type: String,
      default: '0px'
    },
    closeShow: {
      type: Boolean,
      default: false
    }

  },
  data () {
    return {
      promptValue: this.value
    }
  },
  methods: {
    close () {
      this.$emit('close')
      this.isVisible = false
      this.cancelCallBack()
      this.destroyed()
    },
    confirm () {
      this.$emit('confirm')
      this.isVisible = false
      if (this.type === 'prompt') {
        if (this.promptValue !== '') {
          this.okCallBack(this.promptValue)
        }
      } else {
        this.okCallBack()
      }
      this.destroyed()
    },
    maskClose () {
      if (this.maskClosable) {
        this.close()
      }
    },
    destroyed () {
      setTimeout(() => {
        this.$destroy()
      }, 200)
    }
  },
  mounted () {
    setTimeout(() => {
      this.isVisible = true
    }, 100)

    if (this.autoClose) {
      setTimeout(() => {
        this.close()
      }, 3000)
    }
  }
}
</script>