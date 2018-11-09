export class ThuCungModel {
    IdThuCung: number;
    TenThuongGoi: string;
    NgayNuoi: string;
    IdGiongThuCung: number;
    IdNguoiDung: number;
    TrangThai: boolean;
    GiongThuCung: {
        IdGiongThuCung: 1,
        TenGiongThuCung: string;
    };
}
