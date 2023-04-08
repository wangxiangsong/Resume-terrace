import React, { useEffect, useReducer } from 'react';
import { RESUME_TOOLBAR_LIST, ICON_LIST, toolbarModuleHomologousModalFormFields } from '@src/common/resumeToolbar';
import { RESUME_TOOLBAR_ITEM, RESUME_TOOLBAR_MAPS, ICON_LIST_TYPE, TOOLBAR_MODULE_TYPE } from '@src/common/type';
import { MyIcon } from '@src/assest/resume';
import _ from 'lodash';
import { useDispatch } from 'react-redux';
import { DispatchType } from '@src/store';
import { addedListToRedux } from '@src/store/module/resume';
import InfoModal from './components/infoModal';
import { BASE_INFO_FIELDS } from './components/common/type';
import { moduleHomologousModalFormFields } from './components/common/const';

/**
 * @description 已添加模块 & 未添加模块 的列表
 */
interface TOOLBAR_LIST_TYPE {
  title: TOOLBAR_MODULE_TYPE;
  list: RESUME_TOOLBAR_ITEM[] | undefined;
}

interface INITDATA_TYPE {
  addedList: RESUME_TOOLBAR_ITEM[];
  noAddedList: RESUME_TOOLBAR_ITEM[];
  open: boolean | undefined;
  currentModalItem: Partial<RESUME_TOOLBAR_ITEM>;
  fieldsData: BASE_INFO_FIELDS[];
}

const initData: INITDATA_TYPE = {
  addedList: [],
  noAddedList: [],
  open: false,
  currentModalItem: {},
  fieldsData: [],
};

function ResumeToolbar() {
  const dispatch = useDispatch<DispatchType>();

  const [state, setState] = useReducer(
    (state: Partial<INITDATA_TYPE>, payload: Partial<INITDATA_TYPE>) => ({ ...state, ...payload }),
    initData
  );

  const { addedList, noAddedList, open, currentModalItem, fieldsData } = state;

  const toolbarList: TOOLBAR_LIST_TYPE[] = [
    {
      title: TOOLBAR_MODULE_TYPE.ADDED,
      list: addedList,
    },
    {
      title: TOOLBAR_MODULE_TYPE.NOADDED,
      list: noAddedList,
    },
  ];

  /**
   * @description 通过 require 字段判断是 已添加模块 还是 未添加模块
   */
  useEffect(() => {
    const addedList = RESUME_TOOLBAR_LIST.filter((item: RESUME_TOOLBAR_ITEM) => item.require);
    const noAddedList = RESUME_TOOLBAR_LIST.filter((item: RESUME_TOOLBAR_ITEM) => !item.require);
    syncAddedListToRedux(addedList);
    setState({ addedList, noAddedList });
  }, []);

  /**
   * @description 将已添加模块的数据同步到redux
   */
  const syncAddedListToRedux = (list: RESUME_TOOLBAR_ITEM[]) => {
    dispatch(addedListToRedux(list));
  };

  /**
   * @description 获取对应toolbar模块的icon图标
   * @param key toolbar 列表模块的key
   * @returns MyIcon icon组件
   */
  const getIcon = (key: RESUME_TOOLBAR_MAPS) => {
    const type = ICON_LIST.find((d: ICON_LIST_TYPE) => d.key === key)?.type as string;
    return <MyIcon type={type} className="text-18px" />;
  };

  /**
   * @description 获取点击的 item 在未添加模块中的 index
   */
  const getListIndex = (list: RESUME_TOOLBAR_ITEM[] | undefined, item: RESUME_TOOLBAR_ITEM) => {
    return list?.findIndex((d: RESUME_TOOLBAR_ITEM) => d.key === item.key) as number;
  };

  /**
   * @description 点击未添加列表的 item 添加模块到已添加列表
   */
  const addModuleToAddedFromNoAdded = (itemObj: RESUME_TOOLBAR_ITEM) => {
    let newAddedList = _.cloneDeep(addedList);
    let newNoAddedlist = _.cloneDeep(noAddedList);
    let currentIndex = getListIndex(noAddedList, itemObj);
    if (currentIndex !== -1) {
      newAddedList?.push(itemObj);
      newNoAddedlist = newNoAddedlist?.filter((d) => d.key !== itemObj.key);
    }
    syncAddedListToRedux(newAddedList || []);
    setState({ addedList: newAddedList, noAddedList: newNoAddedlist });
  };

  /**
   * @description 判断未添加模块 添加点击事件
   */
  const getClickFunc = (item: TOOLBAR_LIST_TYPE, d: RESUME_TOOLBAR_ITEM) => {
    return item.title === TOOLBAR_MODULE_TYPE.NOADDED ? addModuleToAddedFromNoAdded(d) : openInfoModal(d);
  };

  /**
   * @description 删除点击事件
   */
  const removeModuleFromAddModule = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    itemObj: RESUME_TOOLBAR_ITEM
  ) => {
    e.stopPropagation();
    let newAddedList = _.cloneDeep(addedList);
    let newNoAddedlist = _.cloneDeep(noAddedList);
    let currentIndex = getListIndex(addedList, itemObj);
    if (currentIndex !== -1) {
      newAddedList = newAddedList?.filter((d) => d.key !== itemObj.key);
      newNoAddedlist?.push(itemObj);
    }
    syncAddedListToRedux(newAddedList || []);
    setState({ addedList: newAddedList, noAddedList: newNoAddedlist });
  };

  /**
   * @description 打开弹窗，判断是哪种信息录入
   */
  const openInfoModal = (itemObj: RESUME_TOOLBAR_ITEM) => {
    let res: BASE_INFO_FIELDS[] = moduleHomologousModalFormFields[itemObj.key];
    setState({ open: true, currentModalItem: itemObj, fieldsData: res });
  };

  /**
   * @description 关闭弹窗
   */
  const closeInfoModal = () => {
    setState({ open: false });
  };

  /**
   * @description 弹窗确认，录入信息
   */
  const onOkAndEnter = (data: any) => {};

  return (
    <div>
      {toolbarList?.map((item) => (
        <div className="mt-16px" key={item.title}>
          <div className="text-18px">
            <MyIcon type="icon-resume-fuzhushuxian" style={{ fontSize: 20 }} />
            <span>{item.title}</span>
          </div>
          <div className="mt-16px">
            {item.list?.map((d: RESUME_TOOLBAR_ITEM) => (
              <div
                key={d.key}
                className="py-16px pl-18px mt-16px bg-[#f0f9ff] rounded-8px flex relative"
                onClick={() => getClickFunc(item, d)}
              >
                {d.require ? (
                  <div className="absolute right-0 top-0 bg-[#57534e] px-10px py-5px text-12px rounded-tr-8px rounded-bl-8px text-[#fff]">
                    必选项
                  </div>
                ) : null}
                <div>{getIcon(d.key)}</div>
                <div className="ml-8px w-full">
                  <div className="flex justify-between w-full pr-15px">
                    <div>{d.name}</div>
                    {!d.require && item.title !== TOOLBAR_MODULE_TYPE.NOADDED ? (
                      <div>
                        <MyIcon type="icon-resume-bianji" className="mr-10px cursor-pointer" />
                        <MyIcon
                          type="icon-resume-shanchu"
                          className="cursor-pointer"
                          onClick={(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) =>
                            removeModuleFromAddModule(e, d)
                          }
                        />
                      </div>
                    ) : null}
                  </div>
                  <div className="text-12px mt-8px text-[#a8a29e]">{d.summary}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      {open ? (
        <InfoModal
          open={open}
          onCancel={closeInfoModal}
          onOkAndEnter={onOkAndEnter}
          currentModalItem={currentModalItem as RESUME_TOOLBAR_ITEM}
          fieldsData={fieldsData as BASE_INFO_FIELDS[]}
        />
      ) : null}
    </div>
  );
}
export default ResumeToolbar;
