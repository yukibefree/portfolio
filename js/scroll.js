
/*-------------------------------------------
スクロールアニメーション
-------------------------------------------*/
/*スクロール中に要素を隠す*/
$(function () {
    $(window).on("scroll touchmove", function () {
        $(".float-item").css("display", "none").delay(5000).fadeIn("fast");

    });
});

/*下からスライドイン*/
// スクロールアニメーションの対象となる要素を取得
const elements_bt = document.querySelectorAll('.slide-in-bottom');

// IntersectionObserverのコールバック関数
const callback_bt = (entries, observer_bt) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('displayed-bottom'); // 要素が表示されたらクラスを追加
            observer_bt.unobserve(entry.target); // 監視を解除
        }
    });
};
// IntersectionObserverの設定
const options_bt = {
    root: null, // ビューポートを基準にする
    rootMargin: '0px', // マージンを設定しない
    threshold: 0.25 // 要素が少しでも表示されたらトリガー
};
// IntersectionObserverのインスタンスを作成
const observer_bt = new IntersectionObserver(callback_bt, options_bt);

// 各要素に対して監視を開始
elements_bt.forEach(element => {
    observer_bt.observe(element);
});
//-------------------------------------------
/*左からスライドイン*/
// スクロールアニメーションの対象となる要素を取得
const elements_lf = document.querySelectorAll('.slide-in-left');

// IntersectionObserverのコールバック関数
const callback_lf = (entries, observer_lf) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('displayed-left'); // 要素が表示されたらクラスを追加
            observer_lf.unobserve(entry.target); // 監視を解除
        }
    });
};
// IntersectionObserverの設定
const options_lf = {
    root: null, // ビューポートを基準にする
    rootMargin: '0px', // マージンを設定しない
    threshold: 0.25 // 要素が少しでも表示されたらトリガー
};
// IntersectionObserverのインスタンスを作成
const observer_lf = new IntersectionObserver(callback_lf, options_lf);

// 各要素に対して監視を開始
elements_lf.forEach(element => {
    observer_lf.observe(element);
});
//-------------------------------------------
/*上からスライドイン*/
// スクロールアニメーションの対象となる要素を取得
const elements_tp = document.querySelectorAll('.slide-in-top');

// IntersectionObserverのコールバック関数
const callback_tp = (entries, observer_tp) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('displayed-top'); // 要素が表示されたらクラスを追加
            observer_tp.unobserve(entry.target); // 監視を解除
        }
    });
};
// IntersectionObserverの設定
const options_tp = {
    root: null, // ビューポートを基準にする
    rootMargin: '0px', // マージンを設定しない
    threshold: 0.25 // 要素が少しでも表示されたらトリガー
};
// IntersectionObserverのインスタンスを作成
const observer_tp = new IntersectionObserver(callback_tp, options_tp);

// 各要素に対して監視を開始
elements_tp.forEach(element => {
    observer_tp.observe(element);
});
//-------------------------------------------
/*右からスライドイン*/
// スクロールアニメーションの対象となる要素を取得
const elements_rt = document.querySelectorAll('.slide-in-right');

// IntersectionObserverのコールバック関数
const callback_rt = (entries, observer_rt) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('displayed-right'); // 要素が表示されたらクラスを追加
            observer_rt.unobserve(entry.target); // 監視を解除
        }
    });
};
// IntersectionObserverの設定
const options_rt = {
    root: null, // ビューポートを基準にする
    rootMargin: '0px', // マージンを設定しない
    threshold: 0.25 // 要素が少しでも表示されたらトリガー
};
// IntersectionObserverのインスタンスを作成
const observer_rt = new IntersectionObserver(callback_rt, options_rt);

// 各要素に対して監視を開始
elements_rt.forEach(element => {
    observer_rt.observe(element);
});
//-------------------------------------------
//共通


