export class QuyenModel {
    IdQuyen: number;
    TenQuyen: string;
    TrangThai: boolean;
    TaiKhoan: [
        {
            IdTaiKhoan: number;
            UserName: string;
            Pass: string;
            TrangThai: boolean;
            IdQuyen: number;
        }
    ];
}
