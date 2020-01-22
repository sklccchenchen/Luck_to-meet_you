/**
 * Created by Rychou on 2018/4/19.
 */
import React, { Component } from 'react'
import $ from 'jquery'
import url from './audio/gbqq.mp3' // 引入背景音乐文件


class Main extends Component {
    state = {
        date: {},
    }
    componentDidMount() {
        this.print();
        setInterval(() => {
            this.time(2020, 1, 21) // 你们的纪念日
        }, 1000
        )
        var audio = document.getElementById("audio");
        setTimeout(() => audio.play(), 10500) // 背景音乐在页面加载后，延迟播放的时长，单位：毫秒。
    }
    print = () => {
        $.fn.autotype = function () {
            var _this = $(this);
            var str = _this.html();
            // 正则替换代码行之间添加的多个空格，不去除换行输出会有明显的停顿：实际是在输出多个空格
            str = str.replace(/(\s){2,}/g, "$1");
            var index = 0;
            $(this).html('');
            var timer = function fn() {
                var args = arguments;
                var current = str.slice(index, index + 1);
                // html标签完整输出,如：<p>
                if (current == '<') {
                    index = str.indexOf('>', index) + 1;
                }
                else {
                    index++;
                }
                //位运算符: 根据setInterval运行奇偶次来判断是否加入下划线字符“_”，使输入效果更逼真
                if (index < str.length - 1) { //打印字符倒数第2个字符开始，不加下划线字符，以防止结束符可能会多输出一下划线字符
                    _this.html(str.substring(0, index) + (index & 1 ? '_' : ''));
                } else {
                    _this.html(str.substring(0, index));
                    clearTimeout(timer);
                };
                setTimeout(fn, 160)
            };
            // 延迟1s开始
            setTimeout(timer, 1000);
        };
        $("#autotype").autotype();
    }
    time = (year, month, day) => {
        var dateNow = new Date();
        var dateJNR = new Date(year, month - 1, day);
        // var anniversary = parseInt((dateNow - dateJNR) / (365*24*3600*1000))
        var d = parseInt((dateNow - dateJNR) / (24 * 3600 * 1000));
        var hour = parseInt(((dateNow - dateJNR - 10) / (3600 * 1000)) % 24);
        var minute = parseInt((dateNow - dateJNR) / (1000 * 60) % 60);
        var second = parseInt((dateNow - dateJNR) / 1000 % 60);
        this.setState({ date: { d: d, hour: hour, minute: minute, second: second } });
    };
    render() {
        const date = () => {
            if (this.state.date.d !== undefined) {
                const { d, hour, minute, second } = this.state.date
                return (<p>我们已经一起走过了: <span className="date-text">{d}</span> 天
                 <span className="date-text">{hour}</span> 小时 <span className="date-text">{minute}</span> 分 
                 <span className="date-text">{second}</span> 秒 </p>
                )
            }
        }
        return (
            <div className="App animated bounceInLeft">
                <div className="date">{date()}</div>
                <div id="autotype">
                    <h2 style={{ fontWeight: 900 }}>哈喽，可爱的张佳倩同学，你好!</h2>
                    <p>在开始之前，先放首歌当背景音乐吧！Come on，music~<br/>
                    应该是8月29号加的微信，抱歉在不熟的时候强行找你尬聊了两次，这个我想说是我妈逼我聊的你信吗？！#@%……#！%￥@#￥%￥（翻译过来就是：
能不能忽略那段聊天及那段聊天给你种下的印象[[表情真的很真挚]]，啊，我要死了!!!）<br/>
2020年1月21日，我终于约到了那个神(ke)秘(ai)的张佳倩同学。小雨，穿着雨衣来到凉亭，眼镜蒙满雾气，头发好像也略凌乱[[haixiu]]什么？妈妈要见我。。。。。紧张，可是也跑不掉了啊，硬着头皮去提了个牛奶和奶茶就去了
开始紧张是真的，问了句明显年龄不一样的两个阔爱弟弟是不是一般大，那一刻我智商应该是负的，还强行装镇定，在妈妈面前开始尬夸起了弟弟
[[估计阔爱的小学生弟弟都看出这是个菜鸡]]，啊，我又要死了，不过讲真，妈妈很热情落落大方啊，最主要(zhen)是(de)还(bu)那(shi)么(cai)好(hong)看(pi).
<br/>jiaqian，第一眼见你，不记得什么感觉了，但那一眼，真的很深刻（可能是张正艳在我脑海里埋下的期盼成了现实的原因）
微卷的发梢，淡淡的妆容，安静的伫在旁边，如此美好~
<br/>到县里的班车上，无关紧要，胡说八道，不过没有空气的安静，我觉得还可以，感谢(ying)配(ying)合(ying)O(∩_∩)O~
园林步行街，雨中，没小吃，没逛完，如果可以的话下次一定补上，大宿松的步行街，这么短，不逛完太不给面子了吧~
<br/>九宫格火锅，女生真的都能吃辣，又一次发现I am so vegetable! 不过吃的真的很少，张正艳那只菜鸡，点那么少，，，，印象很深的是我第二次给女孩子夹菜了，
第一次是，呃，给昨天想象中的（lian）你（hong），看到这里请相信一句真理：程序猿不会撒谎
<br/>大润发商场，《宠爱》好像和我想象中有点不太一样，不知道你喜不喜欢，我觉得有点翻车了（以后一定长记性提前了解下电影内容）
另外问下你是真的不喜欢爆米花嘛？如果是那就没事了哈~~如果不是，那就都怪张正艳，他教我的（这个帅小伙坏得很），不过你手当时有点凉的>>>>
<br/>电玩，现在想来我想打死我寄几，只想着不强行劝你去玩女生本就不擅长的游戏，为什么不去教你带你玩呢？虽然说实话，我不一定有你玩得好（I am vegetable！真的适合我）
如果有下次的话，我一定手把手带你^-^，如果做不到的话，我就陪皮皮的嘉豪弟弟玩一天楼下的儿童游乐园*%￥#%￥……%
嗯，是第一次夹到了娃娃，小黄鸭，和我卫衣一模一样的颜色，很黄很好（peng）看（zhang）~
你技术可以嘛，目测老司机。。。。
<br/>晚饭，又要夸一波佳倩爸爸的手艺，品尝过味道，嗯，是我的目标厨艺
一天，真的很快，临走时还是忘记跟你说声：张佳倩，你今天真的很好看~^haixiu^
今天，在河塌，认识了爷爷奶奶，聊了有十多分钟，很和蔼，浓浓的淳朴气息~
回来突然有点情绪复杂，写了上面的心里话，顺带实践下之前学的技术，搞了好半天，果然，I am so vegetable！
佳倩，后天就是除夕了，新年快乐，祝你在新的一年学业顺利，快快乐乐^-^</p>
                    <div style={{ textAlign: 'right' }}>
                        <p>2020.1.22</p>
                    </div>
                </div>
                <audio id="audio" src={url}></audio>
            </div>

        )
    }
}
export default Main