import NButton from '@/components/basic/button/Button.vue';
import NIcon from '@/components/basic/icon/Icon.vue';
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
import NTabHead from '@/components/navigation/tabs/TabHead.vue';
import NTabBody from '@/components/navigation/tabs/TabBody.vue';
import NTabTitle from '@/components/navigation/tabs/TabTitle.vue';
import NTabPane from '@/components/navigation/tabs/TabPane.vue';
import NPopover from '@/components/viewport/popover/Popover.vue';
import NCollapse from '@/components/layout/collapse/Collapse.vue';
import NCollapseItem from '@/components/layout/collapse/CollapseItem.vue';
import NCascader from '@/components/form/cascader/Cascader.vue';
import NCarousel from '@/components/other/carousel/Carousel.vue';
import NCarouselItem from '@/components/other/carousel/CarouselItem.vue';
import NMenu from '@/components/navigation/navmenu/NavMenu.vue';
import NSubMenu from '@/components/navigation/navmenu/SubMenu.vue';
import NMenuItem from '@/components/navigation/navmenu/MenuItem.vue';
import NPager from '@/components/navigation/pager/Pager.vue';
import NTable from '@/components/viewport/table/Table.vue';
import NTableColumn from '@/components/viewport/table/TableColumn.vue';
import NSticky from '@/components/navigation/sticky/Sticky.vue';
import NUploader from '@/components/other/upload/Uploader.vue';
import NDatapicker from '@/components/form/datapicker/Datapicker.vue';

export default {
  install(vue) {
    vue.components({
      NButton,
      NIcon,
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
      NTabHead,
      NTabBody,
      NTabTitle,
      NTabPane,
      NPopover,
      NCollapse,
      NCollapseItem,
      NCascader,
      NCarousel,
      NCarouselItem,
      NMenu,
      NSubMenu,
      NMenuItem,
      NPager,
      NTable,
      NTableColumn,
      NSticky,
      NUploader,
      NDatapicker,
    });
  },
};