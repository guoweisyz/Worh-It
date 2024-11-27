Page({
  data: {
    currentSection: 1,
    totalSections: 7,
    ageOptions: [
      { value: '18-24', label: '18-24岁' },
      { value: '25-34', label: '25-34岁' },
      { value: '35-44', label: '35-44岁' },
      { value: '45+', label: '45岁及以上' }
    ],
    // 其他选项数据...
  },

  nextSection() {
    if (this.data.currentSection < this.data.totalSections) {
      this.setData({
        currentSection: this.data.currentSection + 1
      });
    }
  },

  prevSection() {
    if (this.data.currentSection > 1) {
      this.setData({
        currentSection: this.data.currentSection - 1
      });
    }
  },

  submitForm(e) {
    const formData = e.detail.value;
    // 处理表单提交
    wx.request({
      url: 'your-api-endpoint',
      method: 'POST',
      data: formData,
      success(res) {
        wx.showToast({
          title: '提交成功',
          icon: 'success'
        });
      }
    });
  }
});
