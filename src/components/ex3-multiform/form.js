
import { TYPE_INPUT } from "@/constant/Form";
import { v4 as uuidv4 } from "uuid";
export const layoutDefault = [
    {
        id: uuidv4(),
        type: TYPE_INPUT.CHOSEN,
        key: "company",
        required: false,
        err: "",
        value: "",
    },
    {
        id: uuidv4(),
        label: "Vị trí từng làm",
        err: "",
        type: TYPE_INPUT.TEXT,
        key: "worked_posiotion",
        maxLength: 100,
        required: true,
        value: "",
    },
    {
        id: uuidv4(),
        label: "Thời gian làm việc",
        key: "range_time",
        type: TYPE_INPUT.RANGE_TIME,
        required: true,
        err: "",
        value: { from: "", to: "" },
    },
    {
        id: uuidv4(),
        label: "Mô tả công việc",
        key: "description",
        type: TYPE_INPUT.TEXTAREA,
        maxLength: 5000,
        required: false,
        err: "",
        value: "",
    },
];

export const stepForm = [
    {
        label: "Thông tin",
        isActive: true,
        step: 1,
        layout: [
            {
                id: uuidv4(),
                label: "Họ và tên",
                type: TYPE_INPUT.TEXT,
                key: "name",
                maxLength: 100,
                required: true,
                err: "",
                value: "",
            },
            {
                id: uuidv4(),
                label: "Ngày Sinh",
                type: TYPE_INPUT.DATE,
                key: "age",
                required: true,
                err: "",
                value: "",
            },
            {
                id: uuidv4(),
                label: "Thành Phố",
                type: TYPE_INPUT.SELECT,
                key: "address",
                dropdown_type: "chosen_city",
                required: false,
                value: "",
            },
            {
                id: uuidv4(),
                label: "Vị trí làm việc",
                description: "Có thể chọn nhiều vị trí làm việc mà bạn muốn làm việc",
                required: false,
                type: TYPE_INPUT.SEARCH,
                key: "job",
                value: [],
            },
            {
                id: uuidv4(),
                label: "Mô tả về bản thân",
                required: false,
                type: TYPE_INPUT.TEXTAREA,
                maxLength: 1000,
                value: "",
                err: "",
                key: "description",
            },
            {
                id: uuidv4(),
                label: "Ảnh cá nhân",
                required: false,
                type: TYPE_INPUT.FILES,
                key: 'files',
                value: [],
            },
        ],
    },
    {
        label: "Kinh nghiệm làm việc",
        isActive: false,
        step: 2,
        layout: [...JSON.parse(JSON.stringify(layoutDefault))],
    },
    {
        label: "Xác nhận thông tin",
        isActive: false,
        step: 3,
        layout: [
            {
                id: uuidv4(),
                label: "Lý do muốn ứng tuyển vào công ty",
                type: TYPE_INPUT.TEXTAREA,
                key: "description",
                maxLength: 1000,
                required: true,
                err: "",
                value: "",
            },
            {
                id: uuidv4(),
                label: "Mức lương mong muốn",
                type: TYPE_INPUT.SALARY,
                key: "salary",
                required: true,
                err: "",
                value: "",
                maxLength: 10,
            },
        ],
    },
];
