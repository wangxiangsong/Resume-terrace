import { Modal, DatePicker, Input, Form } from 'antd';
import React, { FC } from 'react';
import { baseInfoFields } from './common/const';
import { BASE_INFO_FIELDS } from './common/type';
import _ from 'lodash';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { DispatchType } from '@src/store';
import { setBaseInfoData } from '@src/store/module/templete';

interface InfoModalProps {
  open: boolean | undefined;
  onCancel: () => void;
  onOkAndEnter: (data: any) => void;
}

const { RangePicker } = DatePicker;

const InfoModal: FC<InfoModalProps> = (props) => {
  const dispatch = useDispatch<DispatchType>();
  const { open, onCancel, onOkAndEnter } = props;

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
      const { label, key, type, require } = item;
      switch (type) {
        case 'dateRange':
          return (
            <Form.Item label={label} name={key} key={key} rules={[{ required: require, message: `请选择${label}` }]}>
              <RangePicker />
            </Form.Item>
          );
        default:
          return (
            <Form.Item label={label} name={key} key={key} rules={[{ required: require, message: `请输入${label}` }]}>
              <Input placeholder={`请输入${label}`} />
            </Form.Item>
          );
      }
    });
  };

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      onOk={onOk}
      maskClosable={false}
      centered
      getContainer={() => document.body}
      width={900}
    >
      <Form form={form}>{getFieldsDom(baseInfoFields)}</Form>
    </Modal>
  );
};

export default InfoModal;
