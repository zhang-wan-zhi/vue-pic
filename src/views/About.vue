<template>
  <div class="about">
    <el-button id="zidongshibie" @click="shibie" type="primary"
      >自动识别文本</el-button
    >
    <div id="center">
      <el-upload
        action="#"
        list-type="picture-card"
        :auto-upload="false"
        :file-list="fileList"
      >
        <i slot="default" class="el-icon-plus"></i>
        <div slot="file" slot-scope="{ file }">
          <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
          <span
            class="el-upload-list__item-actions"
            @click.once="imgPick(file)"
          >
          </span>
        </div>
      </el-upload>

        <!-- 动态卡片 -->
      <!-- <el-row>
        <el-col :span="8" v-for="item in list" :key="item.id" :offset="2">
          <el-card :body-style="{ padding: '0px' }">
            <div style="padding: 14px">
              <textarea class="textareaCard" v-model="item.text"></textarea>
              <div class="bottom clearfix">
                <el-button
                  type="text"
                  class="button"
                  @click.once="addText(item)"
                  >操作按钮</el-button
                >
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row> -->
      <el-row>
        <el-col :span="8" :offset="1" v-for="item in fileList" :key="item.id"> 
            <el-image :src="item.url" style="width:10px;height: 10px"></el-image>
        </el-col>
      </el-row>
      <el-button type="primary" @click="addCard">主要按钮</el-button>
      <el-row>
        <el-col :span="8"  :offset="0">
          <el-card :body-style="{ padding: '0px' }">
            <div style="padding: 14px">
              <textarea class="textareaCard" v-model="tx"></textarea>
              <div class="bottom clearfix">
                <el-button
                  type="text"
                  class="button"
                  @click="addText"
                  >操作按钮</el-button
                >
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <!-- <el-upload
      action="https://jsonplaceholder.typicode.com/posts/"
      list-type="picture-card"
      :on-remove="handleRemove"
      :file-list="fileList2"
    >
      <i class="el-icon-plus"></i>
    </el-upload> -->
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="日期" width="180">
          <template slot-scope="scope">
            <!-- <img :src="fileList2[0].url"> -->
            <el-image
              style="width: 100px; height: 100px"
              :src="scope.row.url"
              v-show="scope.row.url"
            ></el-image>
            <span v-show="scope.row.text">{{ scope.row.text }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- 自动识别 -->
      <el-dialog
        title="链接识别"
        :visible.sync="dialogVisibleShibie"
        width="70%"
      >
        <span>链接识别</span>
        <el-input type="textarea" v-model="textareaShibie" style="height: 500px"></el-input>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisibleShibie = false">取 消</el-button>
          <el-button type="primary" @click="tiJiaoShiBie">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogVisibleShibie: false,
      textareaShibie: "",
      list: [
        {
          id: 0,
          text: "",
        },
        {
          id: 1,
          text: "",
        },
      ],
      tableData: [],
      fileList: [],
      tx: "",
      /* fileList2: [], */
    };
  },
  created() {},
  methods: {
    // 添加文字
    addCard() {
      var index = this.list.length
      this.list.push({
        id: index,
        text: ''
      })
    },
    /* addText(item) {
      console.log("添加文字");
      console.log('item',item);
      this.tableData.push(item);
      console.log(this.tableData);
      console.log('list',this.list);
      this.list.splice(item.id, 1);
    }, */
    addText() {
      this.tableData.push({
        text: this.tx
      });
      this.tx = ""
    },
    handleRemove(file, fileList) {
      this.fileList2 = fileList;
      console.log("删除是的列表");
      console.log(fileList);
      console.log("删除时的filelist2");
      console.log(this.fileList2);
      console.log(file, fileList);
      this.$confirm("取消上传该图片？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.fileList.push(file);
          this.$message({
            type: "success",
            message: "取消上传成功!",
          });
        })
        .catch(() => {
          console.log("删除的图片");
          console.log(file);
          this.fileList2.push(file);
        });
    },
    // 打开识别窗口
    shibie() {
      this.dialogVisibleShibie = true;
      console.log("123");
    },
    // 提交识别窗口
    tiJiaoShiBie() {
      // 识别链接
      const reg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g;
      // 识别文案
      const regText = /(.*)(?=\n)/g
      const t = this.textareaShibie.match(regText)
      const a = t.toString()
      const b = a.split(',,,')
      console.log('b',b);
      const txx = b[0].split(',,')
      console.log('txx',txx);
      for(var key in txx) {
        if(txx[key] != '') {
          this.tx += txx[key] + '\n'
        }
        
      }
      console.log('tx',this.tx);
      this.list[0].text = this.tx
      const s = this.textareaShibie.match(reg);
      /* for (const key in s) {
        if (s[key].split("//")[1].split(".")[0] === "uland") {
          this.ruleForm.couponUrl = s[key];
        } else {
          this.ruleForm.bbLink = s[key];
        }
      } */
      console.log(s);
      console.log(this.textareaShibie);
      this.dialogVisibleShibie = false;
      this.fileList = [{id:0,url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]
    },
    handlePreview(file) {
      console.log(file);
    },
    imgPick(file) {
      console.log("选到了");
      console.log(file);
      console.log(this.fileList);
      this.tableData.push(file);
      this.removeByValue(this.fileList, "uid", file.uid);
    },
    // 表格的删除操作
    handleDelete(index, row) {
      // 索引值，文件
      console.log(index, row);
      if (row.text || row.text == '') {
        console.log("删除文字执行");
        console.log(row);
        console.log('删除回去后的list',this.list);
        this.removeByValue(this.tableData, "text", row.text);
        /* this.list.splice(row.id,0,row) */
      }
      if (row.name) {
        console.log("删除图片执行");
        console.log(row);
        this.removeByValue(this.tableData, "uid", row.uid);
        this.fileList.push(row);
      }
    },
    // 根据数组中对象的属性删除指定对象
    removeByValue(arr, attr, value) {
      //数组，属性，属性值
      var index = 0;
      for (var i in arr) {
        if (arr[i][attr] == value) {
          index = i;
          break;
        }
      }
      arr.splice(index, 1);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
/* div.el-upload.el-upload--picture-card {
  display: none;
} */
span.el-upload-list__item-actions {
  cursor: pointer !important;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

/* .image {
    width: 100px;
    height: 100px;
    display: block;
  } */

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
#center {
  width: 1000px;
  margin: auto;
}
.textareaCard {
  width: 100%;
  height: 126px;
  border: none;
  resize: none;
  outline: none;
}
.el-card__body {
  padding: 0px;
}
</style>
