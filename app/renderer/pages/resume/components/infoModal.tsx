import { Modal, DatePicker, Input, Form, Col, Row, Button, message } from 'antd';
import React, { FC, useLayoutEffect, useState } from 'react';
import { BASE_INFO_FIELDS, RECOMMEND_SKILL_TYPE } from './common/type';
import _ from 'lodash';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchType, Store } from '@src/store';
import { entryDataToRedux } from '@src/store/module/resume';
import { RESUME_TOOLBAR_ITEM } from '@src/common/type';
import styles from './index.less';
import { RecommendSkill } from './common/const';
import { CAREER_TYPE } from '@src/store/type/resume';
import { MyIcon } from '@src/assest/resume';

interface InfoModalProps {
  open: boolean | undefined;
  onCancel: () => void;
  currentModalItem: RESUME_TOOLBAR_ITEM;
  fieldsData: BASE_INFO_FIELDS[];
}

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const defaultObj = {
  id: 1,
  title: '未命名项目',
  entryTime: moment().format('YYYY/MM/DD HH:mm:ss'),
  position: '',
  time: { timeBegin: null, timeEnd: null },
  content: '',
};

const InfoModal: FC<InfoModalProps> = (props) => {
  const dispatch = useDispatch<DispatchType>();
  const { open, onCancel, currentModalItem, fieldsData } = props;

  const resumeStoreData = useSelector((state: Store) => state.resume[currentModalItem.key]);

  // 正常信息录入表单
  const [form] = Form.useForm();
  const { validateFields } = form;

  // 多条数据录入表单
  const [multipleForm] = Form.useForm();

  // 左侧列表
  const [leftList, setLeftList] = useState<CAREER_TYPE[]>([]);
  // 当前左侧对应的 表单数据
  const [currentActData, setCurrentActData] = useState<CAREER_TYPE>();
  // 是否可编辑
  const [isEdit, setIsEdit] = useState(false);

  useLayoutEffect(() => {
    if (isMultipleList()) {
      let leftRes: CAREER_TYPE[] = [];
      if ((resumeStoreData as CAREER_TYPE[]).length) {
        leftRes = resumeStoreData as CAREER_TYPE[];
      } else {
        leftRes = [defaultObj];
        setIsEdit(true);
      }
      setCurrentActData(leftRes[0]);
      setLeftList(leftRes);
    }
  }, [currentModalItem.key]);

  /**
   * 数据同步到 redux
   */
  const stateToRedux = (data: any) => {
    dispatch(entryDataToRedux({ type: currentModalItem.key, data }));
  };

  /**
   * 基本数据格式化处理
   */
  const baseDataFormat = (data: any) => {
    let res = _.cloneDeep(data);
    const rangeDate = ['schoolYear'];
    const cutApart = ['city', 'certificate', 'skillList'];

    for (const key of rangeDate) {
      if (res[key]?.length) {
        let obj: any = {};
        obj[`${key}Begin`] = moment(res[key][0]).format('YYYY-MM-DD');
        obj[`${key}End`] = moment(res[key][1]).format('YYYY-MM-DD');
        res = _.set(res, key, obj);
      }
    }

    for (const key of cutApart) {
      if (res[key]) {
        res[`${key}List`] = res[key].split('|');
      }
    }

    return res;
  };

  /**
   * 多条数据格式化处理
   */
  const multipleFormat = (data: any) => {
    let res = _.cloneDeep(data);
    const date = ['time'];
    for (const key of date) {
      if (res[key]?.length) {
        let obj: any = {};
        obj[`${key}Begin`] = moment(res[key][0]).format('YYYY-MM-DD');
        obj[`${key}End`] = moment(res[key][1]).format('YYYY-MM-DD');
        res = _.set(res, key, obj);
      }
    }

    return res;
  };

  /**
   * 基础数据保存
   */
  const onOk = () => {
    validateFields()
      .then((values) => {
        let res: any;
        if (isMultipleList()) {
          res = [];
        } else {
          res = baseDataFormat(values);
        }
        stateToRedux(res);
      })
      .finally(() => {
        onCancel();
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
  const getMultipleListDom = (list: BASE_INFO_FIELDS[]) => {
    return (
      <div className={`flex p-16px rounded-8px min-h-500px ${styles.multipList_box}`}>
        <div className="flex flex-col justify-between w-[26%] border-r border-[#e5e5e5]">
          <div className="flex flex-col">
            {leftList?.map((item) => (
              <div
                className={`border-b border-[#e5e5e5] p-5px pl-16px relative flex justify-between ${
                  item?.id === currentActData?.id ? styles.left_item_active : ''
                }`}
                key={item.id}
                onClick={() => leftSubClick(item)}
              >
                <div>
                  <div className="text-[#404040]">{item.title}</div>
                  <div className="text-[#a3a3a3]">{item.entryTime}</div>
                </div>
                <div>
                  <MyIcon type="icon-resume-shanchu" onClick={(e) => deleteMultiple(e, item)} />
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto">
            <Button type="default" onClick={addMultipleList}>
              添加条目
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center p-16px border-b border-[#e5e5e5]">
            <div className="text-16px">{currentActData?.title}</div>
            <div>
              {isEdit ? (
                <Button type="primary" onClick={multipleSave}>
                  保存
                </Button>
              ) : (
                <Button type="default" onClick={multipleEdit}>
                  编辑
                </Button>
              )}
            </div>
          </div>
          <div className="mt-32px">
            <Form form={multipleForm}>
              <Row>
                <Col span={24}>
                  <Form.Item
                    label={list[0]?.title}
                    name="title"
                    rules={[{ required: true, message: `请输入${list[0]?.title}` }]}
                    labelCol={{ span: 3 }}
                    wrapperCol={{ span: 19 }}
                  >
                    <Input placeholder={`请输入${list[0]?.title}`} allowClear disabled={!isEdit} />
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
                    <Input placeholder="请输入职位" allowClear disabled={!isEdit} />
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
                    <RangePicker style={{ width: '100%' }} allowClear disabled={!isEdit} />
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
                    <TextArea
                      allowClear
                      autoSize={{ maxRows: 6, minRows: 6 }}
                      maxLength={1000}
                      showCount
                      disabled={!isEdit}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    );
  };

  /**
   * 多条数据弹窗保存
   */
  const multipleSave = () => {
    multipleForm.validateFields().then((values) => {
      const res = multipleFormat(values);
      const newCurrentData = { ...res, id: currentActData?.id, entryTime: moment().format('YYYY/MM/DD HH:mm:ss') };
      const currentLeft = leftList.filter((item) => item.id !== currentActData?.id);
      setIsEdit(false);
      setCurrentActData(newCurrentData);
      setLeftList([...currentLeft, newCurrentData]);
      stateToRedux([...currentLeft, newCurrentData]);
    });
  };

  /**
   * 多条数据编辑
   */
  const multipleEdit = () => {
    setIsEdit(true);
  };

  /**
   * 添加条目
   */
  const addMultipleList = () => {
    const newObj = { ...defaultObj, id: leftList.length + 1, entryTime: moment().format('YYYY/MM/DD HH:mm:ss') };
    judgeIsEdit(newObj, true, newObj);
  };

  /**
   * 点击左侧条目
   */
  const leftSubClick = (item: CAREER_TYPE) => {
    if (item.id !== currentActData?.id) {
      judgeIsEdit(item, false);
    }
  };

  /**
   * 判断当前条目是否 在可编辑状态下
   */
  const judgeIsEdit = (item: CAREER_TYPE, flag: boolean, newObj?: CAREER_TYPE) => {
    if (isEdit) {
      Modal.confirm({
        width: '500px',
        content: '当前数据未保存,切换条目会导致数据丢失,确认要切换嘛?',
        centered: true,
        onOk: () => {
          if (newObj) {
            setCurrentActData(newObj);
            multipleForm.setFieldsValue({});
          } else {
            setCurrentActData(item);
            multipleForm.setFieldsValue({
              ...item,
              time: item.time.timeBegin ? [moment(item.time.timeBegin), moment(item.time.timeEnd)] : [],
            });
          }
          setIsEdit(flag);
        },
        afterClose: () => {
          if (newObj) {
            setLeftList((state) => [...state, newObj]);
            stateToRedux([...leftList, newObj]);
          }
        },
      });
    } else {
      if (newObj) {
        setCurrentActData(newObj);
        multipleForm.setFieldsValue({});
        setLeftList((state) => [...state, newObj]);
        stateToRedux([...leftList, newObj]);
      } else {
        setCurrentActData(item);
        multipleForm.setFieldsValue({
          ...item,
          time: item.time.timeBegin ? [moment(item.time.timeBegin), moment(item.time.timeEnd)] : [],
        });
      }
      setIsEdit(flag);
    }
  };

  /**
   * 删除条目
   */
  const deleteMultiple = (e: any, item: CAREER_TYPE) => {
    if (leftList.length === 1) {
      message.info({ content: '请添加更多数据再进行删除哦！' });
    } else {
      e.stopPropagation();
      const newLeftData = leftList.filter((d) => d.id !== item.id);
      Modal.confirm({
        content: '确认删除嘛？',
        centered: true,
        onOk: () => {
          setLeftList(newLeftData);
          stateToRedux(newLeftData);
          setCurrentActData(newLeftData[0]);
        },
      });
    }
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
      footer={
        !isMultipleList() ? (
          <Button type="primary" onClick={onOk}>
            保存
          </Button>
        ) : null
      }
    >
      {isMultipleList() ? (
        getMultipleListDom(fieldsData)
      ) : (
        <Form form={form} labelCol={{ span: 6 }} initialValues={resumeStoreData}>
          <Row>{getFieldsDom(fieldsData)}</Row>
        </Form>
      )}
    </Modal>
  );
};

export default InfoModal;
