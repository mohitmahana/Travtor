export class Paging {
	pageNo: number;
	pageSize: number;
	constructor(paging?: Paging) {
		this.pageNo = paging?.pageNo ? paging?.pageNo : 0;
		this.pageSize = paging?.pageSize ? paging?.pageSize : 0;
	}
}
