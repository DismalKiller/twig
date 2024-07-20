class Result {
    constructor(data = null, code = 200, message = '操作成功') {
        this.code = code;
        this.message = message;
        this.data = data;
    }

    static build(data = null, code = 200, message = '操作成功') {
        return new Result(data, code, message);
    }

    static ok(data = null) {
        return Result.build(data, 200, '操作成功');
    }

    static fail(code = 500, message = '操作失败') {
        return Result.build(null, code, message);
    }
}

module.exports = Result;
