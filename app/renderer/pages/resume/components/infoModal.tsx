import { Modal, DatePicker, Input, Form, Col, Row, Button } from 'antd';
import React, { FC, useState } from 'react';
import { BASE_INFO_FIELDS, RECOMMEND_SKILL_TYPE } from './common/type';
import _ from 'lodash';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { DispatchType } from '@src/store';
import { setBaseInfoData } from '@src/store/module/templete';
import { RESUME_TOOLBAR_ITEM } from '@src/common/type';
import styles from './index.less';
import { RecommendSkill } from './common/const';

interface InfoModalProps {
  open: boolean | undefined;
  onCancel: () => void;
  onOkAndEnter: (data: any) => void;
  currentModalItem: RESUME_TOOLBAR_ITEM;
  fieldsData: BASE_INFO_FIELDS[];
}

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const InfoModal: FC<InfoModalProps> = (props) => {
  const dispatch = useDispatch<DispatchType>();
  const { open, onCancel, onOkAndEnter, currentModalItem, fieldsData } = props;

  // 正常信息录入表单
  const [form] = Form.useForm();
  const { validateFields } = form;

  // 多条数据录入表单
  const [multipleForm] = Form.useForm();

  // 左侧列表
  const [leftList, setLeftList] = useState([
    { title: '上海瞎说大学网络中心', entryTime: '2021/04/08 12:32:22', active: true },
    { title: '北京瞎说大学网络中心', entryTime: '2021/04/07 12:32:23' },
  ]);

  // 当前左侧对应的 表单数据
  const [currentActData, setCurrentActData] = useState({
    title: '上海瞎说大学网络中心',
    entryTime: '2021/04/08 12:32:22',
    corporation: '上海瞎说大学网络中心',
    position: '前端工程师',
    time: [moment(), moment()],
    content:
      '担任TickNet工作室前端工程师,与湖南瞎说大学网络中心合作,围绕微信企业号开发或主导多个应用｜任职期间基于微信企业号开发校内闲余市场,采用Vue.js主导开发,并与湖南xxx科技有限公司合作,主导开发该公司官网及后台管理',
  });

  const onOk = () => {
    validateFields().then((values) => {
      const begin = moment(values.session[0]).format('YYYYMMDD');
      const end = moment(values.session[1]).format('YYYYMMDD');
      _.set(values, 'sessionBegin', begin);
      _.set(values, 'sessionEnd', end);
      _.set(values, 'session', `${begin}-${end}`);
      dispatch(setBaseInfoData(values));
    });
  };

  /**
   * @description 判断是否是 多条数据录入
   * @returns {boolean}
   */
  const isMultipleList = () => fieldsData[0].type === 'multipleList';

  /**
   * @param list 表单字段列表
   * @returns 表单dom
   */
  const getFieldsDom = (list: BASE_INFO_FIELDS[]) => {
    return list?.map((item: BASE_INFO_FIELDS) => {
      const { label, key, type, require, span, remarks } = item;
      switch (type) {
        case 'dateRange':
          return (
            <Col span={span} key={key}>
              <Form.Item label={label} name={key} rules={[{ required: require, message: `请选择${label}` }]}>
                <RangePicker style={{ width: 245 }} allowClear />
              </Form.Item>
            </Col>
          );
        case 'textArea':
          return (
            <Col span={span} key={key}>
              <Form.Item
                label={label}
                name={key}
                rules={[{ required: require, message: `请选择${label}` }]}
                labelCol={{ span: 3 }}
                wrapperCol={{ span: 19 }}
              >
                <TextArea allowClear autoSize={{ maxRows: 6, minRows: 6 }} maxLength={1000} showCount />
              </Form.Item>
              {remarks ? <div className="ml-110px -mt-20px text-red-500">{remarks}</div> : null}
            </Col>
          );
        case 'longInput':
          return (
            <Col span={span} key={key}>
              <Form.Item
                label={label}
                name={key}
                rules={[{ required: require, message: `请输入${label}` }]}
                labelCol={{ span: 3 }}
                wrapperCol={{ span: 19 }}
              >
                <Input placeholder={`请输入${label}`} allowClear />
              </Form.Item>
              {remarks ? <div className="ml-110px -mt-20px text-red-500">{remarks}</div> : null}
            </Col>
          );
        case 'tagsAndTextArea':
          return (
            <Col span={span} key={key}>
              <div className="ml-110px flex flex-wrap">
                {RecommendSkill.map((recommend: RECOMMEND_SKILL_TYPE) => {
                  const {
                    uid,
                    styles: { font, bg },
                    label,
                  } = recommend;
                  return (
                    <div
                      className="p-5px m-5px rounded-5px cursor-pointer"
                      key={uid}
                      style={{
                        color: font,
                        borderColor: font,
                        backgroundColor: bg,
                      }}
                    >
                      {label}
                    </div>
                  );
                })}
              </div>
              <Form.Item
                label={label}
                name={key}
                rules={[{ required: require, message: `请选择${label}` }]}
                labelCol={{ span: 3 }}
                wrapperCol={{ span: 19 }}
              >
                <TextArea allowClear autoSize={{ maxRows: 6, minRows: 6 }} maxLength={1000} showCount />
              </Form.Item>
              {remarks ? <div className="ml-110px -mt-20px text-red-500">{remarks}</div> : null}
            </Col>
          );
        default:
          return (
            <Col span={span} key={key}>
              <Form.Item label={label} name={key} rules={[{ required: require, message: `请输入${label}` }]}>
                <Input placeholder={`请输入${label}`} style={{ width: 245 }} allowClear />
              </Form.Item>
            </Col>
          );
      }
    });
  };

  /**
   * @description 多条数据录入
   * @returns dom
   */
  const getMultipleListDom = () => {
    return (
      <div className={`flex p-16px rounded-8px min-h-500px ${styles.multipList_box}`}>
        <div className="flex flex-col justify-between w-[26%] border-r border-[#e5e5e5]">
          <div className="flex flex-col">
            {leftList.map((item) => (
              <div
                className={`border-b border-[#e5e5e5] p-5px pl-16px relative ${
                  item.active ? styles.left_item_active : ''
                }`}
              >
                <div className="text-[#404040]">{item.title}</div>
                <div className="text-[#a3a3a3]">{item.entryTime}</div>
              </div>
            ))}
          </div>
          <div className="mx-auto">
            <Button type="default">添加条目</Button>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center p-16px border-b border-[#e5e5e5]">
            <div className="text-16px">{currentActData.title}</div>
            <div>
              <Button type="default">编辑</Button>
            </div>
          </div>
          <div className="mt-32px">
            <Form form={multipleForm}>
              <Row>
                <Col span={24}>
                  <Form.Item
                    label="公司"
                    name="corporation"
                    rules={[{ required: true, message: '请输入公司' }]}
                    labelCol={{ span: 3 }}
                    wrapperCol={{ span: 19 }}
                  >
                    <Input placeholder="请输入公司" allowClear />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    label="职位"
                    name="position"
                    rules={[{ required: true, message: '请输入职位' }]}
                    labelCol={{ span: 3 }}
                    wrapperCol={{ span: 19 }}
                  >
                    <Input placeholder="请输入职位" allowClear />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    label="时间"
                    name="time"
                    rules={[{ required: true, message: '请选择时间' }]}
                    labelCol={{ span: 3 }}
                    wrapperCol={{ span: 19 }}
                  >
                    <RangePicker style={{ width: '100%' }} allowClear />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    label="内容"
                    name="content"
                    rules={[{ required: true, message: '请输入工作内容' }]}
                    labelCol={{ span: 3 }}
                    wrapperCol={{ span: 19 }}
                  >
                    <TextArea allowClear autoSize={{ maxRows: 6, minRows: 6 }} maxLength={1000} showCount />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Modal
      className={styles.enter_info_modal}
      title={currentModalItem.name}
      open={open}
      onCancel={onCancel}
      onOk={onOk}
      maskClosable={false}
      centered
      getContainer={() => document.body}
      width={900}
    >
      {isMultipleList() ? (
        getMultipleListDom()
      ) : (
        <Form form={form} labelCol={{ span: 6 }}>
          <Row>{getFieldsDom(fieldsData)}</Row>
        </Form>
      )}
    </Modal>
  );
};

export default InfoModal;
