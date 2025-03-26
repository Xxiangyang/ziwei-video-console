// 添加基本的JavaScript功能
document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const videoTypeSelect = document.querySelector('select.form-control');
    const promptContainer = document.querySelector('.prompt-container');
    const copyButton = document.querySelector('.prompt-container + .btn');
    const generateButton = document.querySelector('.btn[style="background-color: #4caf50;"]');
    const aiContentTextarea = document.querySelector('textarea.form-control');
    const tabButtons = document.querySelectorAll('.tab');
    
    // 复制提示词到剪贴板
    if (copyButton) {
        copyButton.addEventListener('click', function() {
            const promptText = promptContainer.textContent;
            navigator.clipboard.writeText(promptText).then(function() {
                alert('提示词已复制到剪贴板！');
            }).catch(function(err) {
                alert('复制失败，请手动复制: ' + err);
            });
        });
    }
    
    // 生成脚本文档
    if (generateButton) {
        generateButton.addEventListener('click', function() {
            const aiContent = aiContentTextarea.value.trim();
            if (!aiContent) {
                alert('请先从DeepSeek复制AI生成的内容！');
                return;
            }
            
            // 模拟生成文档
            alert('脚本文档生成成功！在实际应用中，这里会创建一个新的文档。');
            
            // 更新状态
            const statusSelect = document.querySelectorAll('select.form-control')[1];
            if (statusSelect) {
                statusSelect.value = '已完成';
            }
        });
    }
    
    // 标签页切换
    tabButtons.forEach(tab => {
        tab.addEventListener('click', function() {
            tabButtons.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // 在实际应用中，这里会切换不同的内容区域
            alert('在完整版本中，这里会切换到"' + this.textContent + '"页面');
        });
    });
    
    // 视频类型变化时更新提示词
    if (videoTypeSelect) {
        videoTypeSelect.addEventListener('change', function() {
            const selectedType = this.value;
            let newPrompt = '';
            
            if (selectedType === '流量型') {
                newPrompt = `请以紫微斗数命理人生规划师的身份，为我创作一篇关于"火星在12宫位如何化解"的视频脚本。

背景信息：
- 我是徐向阳，985大学生物学研究生，专注紫微斗数命理人生规划4年
- 我的风格是专业但不尖锐，沉稳平易近人，能洞察客户内心痛点
- 我的核心差异化优势是不仅解读紫微斗数命盘，还能提供可落地的解决方案
- 目标受众是25-45岁对紫微斗数感兴趣的人群
- 他们的核心痛点是对紫微斗数知识感兴趣但不知从何入手

要求：
1. 视频类型：流量型视频（3-5分钟，900-1500字）
2. 使用"热点话题解析型"结构
3. 包含以下部分：
   - 吸引人的开场白：引起观众对火星在12宫位的兴趣
   - 核心问题点明：为什么火星在12宫位需要化解
   - 简明知识讲解：火星在12宫位的基本含义
   - 解决方案预告：暗示我有系统化解方案
   - 互动引导：鼓励评论和私信咨询

4. 突出我的核心差异化优势：不仅解读命盘，还提供可落地的解决方案
5. 语言风格生动有趣但专业，适合吸引新观众`;
            } else if (selectedType === '人设型') {
                newPrompt = `请以紫微斗数命理人生规划师的身份，为我创作一篇关于"火星在12宫位如何化解"的视频脚本。

背景信息：
- 我是徐向阳，985大学生物学研究生，专注紫微斗数命理人生规划4年
- 我的风格是专业但不尖锐，沉稳平易近人，能洞察客户内心痛点
- 我的核心差异化优势是不仅解读紫微斗数命盘，还能提供可落地的解决方案
- 目标受众是对命理感兴趣的新客户
- 他们的核心痛点是不确定我的专业能力和方法论

要求：
1. 视频类型：人设型视频（5分钟左右，1500字）
2. 使用"方法论展示型"结构
3. 包含以下部分：
   - 开场白：简要介绍我的背景和专业领域
   - 方法论介绍：我如何将科学思维应用于紫微斗数解读
   - 案例概述：以火星在12宫位为例展示我的解读方法
   - 差异化优势：强调我提供可落地解决方案的独特之处
   - 价值主张：说明我的服务如何帮助客户解决实际问题

4. 突出我的核心差异化优势：不仅解读命盘，还提供可落地的解决方案
5. 语言风格专业自信，展现我的学术背景和系统思维`;
            } else {
                newPrompt = promptContainer.textContent; // 保持原有内容
            }
            
            promptContainer.textContent = newPrompt;
        });
    }
    
    // 添加表格行点击事件
    const tableRows = document.querySelectorAll('.table-row');
    tableRows.forEach(row => {
        row.addEventListener('click', function() {
            alert('在完整版本中，这里会打开选中的视频项目');
        });
    });
    
    // 保存按钮功能
    const saveButton = document.querySelector('.action-buttons .btn:last-child');
    if (saveButton) {
        saveButton.addEventListener('click', function() {
            alert('表单数据已保存！在实际应用中，这里会将数据保存到存储系统。');
        });
    }
});
