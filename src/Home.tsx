import React from 'react';

const Home = () => {
  return (
    <div style={{ padding: '20px' }}>
      {/* 第一张图片及对应文字 */}
      <img 
        src="public/img/qwe.jpg" 
        alt="区块链分享会" 
        style={{ width: '90%', height: 'auto', marginBottom: '20px' }} 
      />
      <p>
        在基础概念和技术背景的介绍之后，讲座还带领同学们进行了一场“XDAG转账体验”……
      </p>

      {/* 第二张图片及对应文字 */}
      <img 
        src="public/img/qaz.jpg" 
        alt="区块链发展历史" 
        style={{ width: '90%', height: 'auto', margin: '20px 0' }} 
      />
      <p>
        Hellowolrd老师带领我们回顾了区块链技术的演变历程……
      </p>

      {/* 第三张图片及对应文字 */}
      <img 
        src="public/img/qsx.jpg" 
        alt="XDAG技术解析" 
        style={{ width: '90%', height: 'auto', marginBottom: '20px' }} 
      />
      <p>
        专家们还专门介绍了XDAG的发展历程和项目特点……
      </p>

      {/* 第四张图片及对应文字 */}
      <img 
        src="public/img/qdc.jpg" 
        alt="互动讨论环节" 
        style={{ width: '90%', height: 'auto', margin: '20px 0' }} 
      />
      <p>
        现场气氛热烈，互动环节中，同学们积极提问……
      </p>

      {/* 第五张图片及对应文字 */}
      <img 
        src="public/img/edc.jpg" 
        alt="专家金句" 
        style={{ width: '90%', height: 'auto', marginBottom: '20px' }} 
      />
      <p>
        “区块链技术的发展不仅仅是技术的迭代，更是思维方式的革新。” —— Helloworld老师……
      </p>

      {/* 最后内容 */}
      <p>
        本次讲座内容丰富，深入浅出……所有对社区感兴趣的都可以加好友进入社区群聊一起探讨。
      </p>
    </div>
  );
};

export default Home;
