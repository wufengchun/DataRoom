
const type = 'GcBorder3'

const name='边框三'
// 右侧配置项
const setting = [
  // 背景色
  {
    label:'背景色',
    // 设置组件类型， select / input / colorPicker
    type: 'colorPicker',
    // 字段
    field: 'backgroundColor',
    optionField: 'backgroundColor', // 对应options中的字段
    // 是否多选
    multiple: false,
    // 绑定的值
    value: '',
  },
  // 标题字体颜色
  {
    label:'标题字体颜色',
    // 设置组件类型， select / input / colorPicker
    type: 'colorPicker',
    // 字段
    field: 'fontColor',
    optionField: 'fontColor', // 对应options中的字段
    // 是否多选
    multiple: false,
    // 绑定的值
    value: '',
  },


]




export default {
  setting,
  type,
  name
}
