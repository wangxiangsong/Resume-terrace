import { Modal, DatePicker, Input, Form, Col, Row } from 'antd';
import React, { FC } from 'react';
import { BASE_INFO_FIELDS } from './common/type';
import _ from 'lodash';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { DispatchType } from '@src/store';
import { setBaseInfoData } from '@src/store/module/templete';
import { RESUME_TOOLBAR_ITEM } from '@src/common/type';
import styles from './index.less';

interface InfoModalProps {
  open: boolean | undefined;
  onCancel: () => void;
  onOkAndEnter: (data: any) => void;
  currentModalItem: RESUME_TOOLBAR_ITEM;
  fieldsData: BASE_INFO_FIELDS[];
}

const { RangePicker } = DatePicker;

const InfoModal: FC<InfoModalProps> = (props) => {
  const dispatch = useDispatch<DispatchType>();
  const { open, onCancel, onOkAndEnter, currentModalItem, fieldsData } = props;

  const [form] = Form.useForm();
  const { validateFields } = form;

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

  const getFieldsDom = (list: BASE_INFO_FIELDS[]) => {
    return list?.map((item: BASE_INFO_FIELDS) => {
      const { label, key, type, require, span } = item;
      switch (type) {
        case 'dateRange':
          return (
            <Col span={span}>
              <Form.Item label={label} name={key} key={key} rules={[{ required: require, message: `请选择${label}` }]}>
                <RangePicker style={{ width: 230 }} />
              </Form.Item>
            </Col>
          );
        default:
          return (
            <Col span={span}>
              <Form.Item label={label} name={key} key={key} rules={[{ required: require, message: `请输入${label}` }]}>
                <Input placeholder={`请输入${label}`} style={{ width: 230 }} />
              </Form.Item>
            </Col>
          );
      }
    });
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
      <Form form={form} labelCol={{ span: 6 }}>
        <Row>{getFieldsDom(fieldsData)}</Row>
      </Form>
    </Modal>
  );
};

export default InfoModal;
