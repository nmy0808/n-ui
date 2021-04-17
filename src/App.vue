<template>
  <div id="app">
    <div class="box-item">
      <n-menu v-model="selectedIndex">
        <n-menu-item index="1">首页</n-menu-item>
        <n-sub-menu index="2">
          <template #title>
            关于
          </template>
          <n-menu-item index="2-1">企业文化</n-menu-item>
          <n-menu-item index="2-2">开发团队</n-menu-item>
          <n-menu-item index="2-3">联系方式</n-menu-item>
        </n-sub-menu>
        <n-menu-item index="3">联系</n-menu-item>
      </n-menu>
    </div>
    <div class="box-item">
      <n-carousel initial-index="b">
        <n-carousel-item name="a" key="0">1</n-carousel-item>
        <n-carousel-item name="b" key="1">2</n-carousel-item>
        <n-carousel-item name="c" key="2">3</n-carousel-item>
        <n-carousel-item name="d" key="3">4</n-carousel-item>
      </n-carousel>
    </div>
    <div class="box-item">
      <Cascader
        :cascaderSourced.sync="cascaderSourced"
        :cascaderSource="cascaderSource"
      />
    </div>
    <div class="box-item">
      {{ collapseSelected }}
      <n-collapse v-model="collapseSelected" :single="true">
        <n-collapse-item name="1">
          <template #title> 新闻 </template>
          经过税务机关3个多月的依法调查核实，群众举报范冰冰“阴阳合同”涉税问题有了明确结果。
          税务机关依法向范冰冰作出追缴税款、滞纳金并处以罚款的决定。
          社会各界特别是文艺影视工作者坚决支持税务部门依法查处此案，并从中得到教育警示。
        </n-collapse-item>
        <n-collapse-item name="2">
          <template #title> 财经 </template>
          经过税务机关3个多月的依法调查核实，群众举报范冰冰“阴阳合同”涉税问题有了明确结果。
          税务机关依法向范冰冰作出追缴税款、滞纳金并处以罚款的决定。
          社会各界特别是文艺影视工作者坚决支持税务部门依法查处此案，并从中得到教育警示。
        </n-collapse-item>
        <n-collapse-item name="3">
          <template #title> 体育 </template>
          经过税务机关3个多月的依法调查核实，群众举报范冰冰“阴阳合同”涉税问题有了明确结果。
          税务机关依法向范冰冰作出追缴税款、滞纳金并处以罚款的决定。
          社会各界特别是文艺影视工作者坚决支持税务部门依法查处此案，并从中得到教育警示。
        </n-collapse-item>
      </n-collapse>
    </div>
    <div class="box-item">
      <Popover trigger="click" position="bottom">
        <template #content>
          <div>
            我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容...
          </div>
        </template>
        <n-button>按钮</n-button>
      </Popover>
      <Popover trigger="click" position="top">
        <template #content>
          <div>
            我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容...
          </div>
        </template>
        <n-button>按钮</n-button>
      </Popover>
      <Popover trigger="click" position="left">
        <template #content>
          <div>
            我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容...
          </div>
        </template>
        <n-button>按钮</n-button>
      </Popover>
      <Popover trigger="click" position="right">
        <template #content>
          <div>
            我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容...
          </div>
        </template>
        <n-button>按钮</n-button>
      </Popover>
    </div>
    <div class="box-item">
      <Popover trigger="hover" position="bottom">
        <template #content>
          <div>
            我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容...
          </div>
        </template>
        <n-button>按钮</n-button>
      </Popover>
      <Popover trigger="hover" position="top">
        <template #content>
          <div>
            我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容...
          </div>
        </template>
        <n-button>按钮</n-button>
      </Popover>
      <Popover trigger="hover" position="left">
        <template #content>
          <div>
            我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容...
          </div>
        </template>
        <n-button>按钮</n-button>
      </Popover>
      <Popover trigger="hover" position="right">
        <template #content>
          <div>
            我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容我是弹窗内容...
          </div>
        </template>
        <n-button>按钮</n-button>
      </Popover>
    </div>
    <div class="box-item">
      <n-tabs v-model="selected" @tabClick="tabClick">
        <tab-head>
          <n-button slot="tabBarExtraContent">按钮</n-button>
          <tab-title name="tab1">标签一</tab-title>
          <tab-title name="tab2">标签二</tab-title>
          <tab-title name="tab3" disabled>标签三</tab-title>
        </tab-head>
        <tab-body class="tab-body">
          <tab-pane name="tab1">内容1</tab-pane>
          <tab-pane name="tab2">内容2</tab-pane>
          <tab-pane name="tab3">内容3</tab-pane>
        </tab-body>
      </n-tabs>
    </div>
    <div class="box-item layout-box">
      <n-button @click="handleToast">弹出</n-button>
    </div>
    <div class="box-item layout-box">
      <n-layout>
        <n-header class="layout-item">header</n-header>
        <n-content class="layout-item">content</n-content>
        <n-footer class="layout-item">footer</n-footer>
      </n-layout>
    </div>
    <div class="box-item layout-box">
      <n-layout>
        <n-header class="layout-item">header</n-header>
        <n-layout>
          <n-sider class="layout-item">sider</n-sider>
          <n-content class="layout-item">content</n-content>
        </n-layout>
        <n-footer class="layout-item">footer</n-footer>
      </n-layout>
    </div>
    <div class="box-item layout-box">
      <n-layout>
        <n-sider class="layout-item">sider</n-sider>
        <n-layout>
          <n-header class="layout-item">header</n-header>
          <n-content class="layout-item">content</n-content>
          <n-footer class="layout-item">footer</n-footer>
        </n-layout>
      </n-layout>
    </div>
    <div class="box-item">
      <n-row class="row" align="middle" justify="space-around">
        <n-col class="col">
          <div class="content">11</div>
        </n-col>
        <n-col class="col">
          <div class="content">2</div>
        </n-col>
        <n-col class="col">
          <div class="content">3</div>
        </n-col>
      </n-row>
    </div>
    <div class="box-item">
      <n-row class="row" align="top" justify="space-around">
        <n-col :span="5" class="col">
          <div class="content">1</div>
        </n-col>
        <n-col :span="5" class="col">
          <div class="content">2</div>
        </n-col>
        <n-col :span="12" class="col">
          <div class="content">3</div>
        </n-col>
      </n-row>
    </div>
    <div class="box-item">
      <n-row :gutter="10" class="row">
        <n-col :xs="8" class="col">
          <div class="content"></div>
        </n-col>
        <n-col :xs="8" class="col">
          <div class="content"></div>
        </n-col>
        <n-col :xs="8" class="col">
          <div class="content"></div>
        </n-col>
      </n-row>
    </div>
    <div class="box-item">
      <h2>基础</h2>
      <p>基础表单组件，支持v-model绑定和原生事件。</p>
      <n-button></n-button>
      <n-button icon="i-search">按钮按钮</n-button>
      <n-button @click="handleClick" position="right" icon="i-setup">
        按钮
      </n-button>
      <n-button-group>
        <n-button icon="i-arrowleft">前进</n-button>
        <n-button>随便</n-button>
        <n-button icon="i-arrowright" position="right">后退</n-button>
      </n-button-group>
      <n-button-group>
        <n-button icon="i-arrowleft">前进</n-button>
        <n-button icon="i-arrowright" position="right">后退</n-button>
      </n-button-group>
      <n-button icon="i-arrowright" :loading="true" position="right"
        >后退</n-button
      >
      <n-button
        icon="i-arrowright"
        :loading="loading"
        position="left"
        @click="loading = !loading"
        >提交</n-button
      >
    </div>
    <div class="box-item">
      <h2>Iput 输入框</h2>
      <p>基础表单组件，支持v-model绑定和原生事件。</p>
      <NInput placeholder="请输入内容" v-model="inputValue" />
      <NInput prefix="i-user" placeholder="请输入用户名" />
      <NInput prefix="i-lock" type="password" placeholder="请输入密码" />
      <NInput placeholder="禁用状态" disabled />
      <NInput error="错误提示消息" placeholder="错误状态" />
      <NInput success="成功提示消息" placeholder="正确状态" />
      <NInput type="textarea" placeholder="请输入" />
    </div>
  </div>
</template>
<script>
import NButton from '@/components/basic/button/Button.vue';
import NButtonGroup from '@/components/basic/button/ButtonGroup.vue';
import NInput from '@/components/form/input/Input.vue';
import NRow from '@/components/layout/grid/Row.vue';
import NCol from '@/components/layout/grid/Col.vue';
import NLayout from '@/components/layout/container/Layout.vue';
import NHeader from '@/components/layout/container/Header.vue';
import NFooter from '@/components/layout/container/Footer.vue';
import NContent from '@/components/layout/container/Content.vue';
import NSider from '@/components/layout/container/Sider.vue';
import NTabs from '@/components/navigation/tabs/Tabs.vue';
import TabHead from '@/components/navigation/tabs/TabHead.vue';
import TabBody from '@/components/navigation/tabs/TabBody.vue';
import TabTitle from '@/components/navigation/tabs/TabTitle.vue';
import TabPane from '@/components/navigation/tabs/TabPane.vue';
import Popover from '@/components/viewport/popover/Popover.vue';
import NCollapse from '@/components/layout/collapse/Collapse.vue';
import NCollapseItem from '@/components/layout/collapse/CollapseItem.vue';
import Cascader from '@/components/form/cascader/Cascader.vue';
import NCarousel from '@/components/other/carousel/Carousel.vue';
import NCarouselItem from '@/components/other/carousel/CarouselItem.vue';
import NMenu from '@/components/navigation/navmenu/NavMenu.vue';
import NSubMenu from '@/components/navigation/navmenu/SubMenu.vue';
import NMenuItem from '@/components/navigation/navmenu/MenuItem.vue';

const cascaderSource = [
  {
    label: '一级a',
    value: '一级a',
    selected: false,
    children: [
      {
        label: '二级a-a',
        value: '二级a-a',
        children: [
          { label: '三级a-a', value: '三级a-a' },
          { label: '三级a-b', value: '三级a-b' },
          { label: '三级a-c', value: '三级a-c' },
        ],
      },
      { label: '二级a-b', value: '二级a-b' },
      { label: '二级a-c', value: '二级a-c' },
    ],
  },
  {
    label: '一级b',
    value: '一级b',
    children: [
      { label: '二级b-a', value: '二级b-a' },
      { label: '二级b-b', value: '二级b-b' },
      { label: '二级b-c', value: '二级b-c' },
    ],
  },
  {
    label: '一级c',
    value: '一级c',
    children: [
      { label: '二级c-a', value: '二级c-a' },
      {
        label: '二级c-b',
        value: '二级c-b',
        children: [
          { label: '三级c-a', value: '三级c-a' },
          { label: '三级c-b', value: '三级c-b' },
          { label: '三级c-c', value: '三级c-c' },
        ],
      },
      { label: '二级c-c', value: '二级c-c' },
    ],
  },
];

export default {
  components: {
    NButton,
    NButtonGroup,
    NInput,
    NRow,
    NCol,
    NLayout,
    NHeader,
    NFooter,
    NContent,
    NSider,
    NTabs,
    TabHead,
    TabBody,
    TabTitle,
    TabPane,
    Popover,
    NCollapse,
    NCollapseItem,
    Cascader,
    NCarousel,
    NCarouselItem,
    NMenu,
    NSubMenu,
    NMenuItem,
  },
  data() {
    return {
      selectedIndex: ['1'],
      collapseSelected: [1, 2],
      loading: false,
      inputValue: '222',
      // tabs
      selected: 'tab2',
      cascaderSource,
      cascaderSourced: [],
    };
  },
  methods: {
    tabClick(e) {
      console.log(e);
      this.$toast('回调哦!');
    },
    handleClick() {},
    handleToast() {
      this.$toast({
        content: '消息提消息提示消息消息提示消息示消息',
        duration: 2,
        closeBtn: '关闭',
        onClose: () => console.log('toast组件-关闭按钮回调'),
        position: 'bottom',
      });
    },
  },
};
</script>
<style lang="scss">
@import '~@/styles/global.scss';
.tab-body {
  height: 200px;
}
.box-item {
  width: 80%;
  padding: 20px;
}
.row {
  height: 200px;
  .col {
    height: 100px;
    .content {
      background: teal;
      height: 100px;
      border: 1px solid;
    }
  }
}
.layout-box {
  height: 200px;
}
.layout-item {
  border: 1px solid;
  min-height: 40px;
}
</style>
