const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const loaders = document.getElementById("loaders")
const container = document.getElementsByClassName("container")

let init = 0

const botSay = (data) => {
    return [
        `Perkenalkan nama saya Rico. Siapa nama kamu?`,
        `Halo ${data?.nama}, berapa usia kamu?`,
        `Ohhh ${data?.usia}, hobi kamu apa ya?`,
        `Wahh... sama dong aku juga hobi ${data?.hobi}, btw punya pacar gak?`,
        `ohhh ${data?.pacar}, yaudah ya kalau begitu. kita akhiri percakapan ini`
    ]
};

pertanyaan.innerHTML = botSay()[0]

let userData = []

function botStart() {
    if (jawaban.value.length < 1) return alert("Silahkan isi jawaban dulu")
    init++
    if(init === 1) {
        botDelay({ nama: jawaban.value })
    }else if(init === 2) {
        botDelay({ usia: jawaban.value })
    }else if(init === 3) {
        botDelay({ hobi: jawaban.value })
    }else if(init === 4) {
        botDelay({ pacar: jawaban.value })
    }else if(init === 5) {
        finishing()
    }else {
        botEnd()
    }
}

function botDelay(jawabanUser) {
    loaders.style.display = "block"
    container[0].style.filter = "blur(8px)"
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
        loaders.style.display = "none"
        container[0].style.filter = "none"
    }, [1250])
    userData.push(jawaban.value)
    jawaban.value = ""
}

function finishing() {
    pertanyaan.innerHTML = `Terima kasih  ${userData[0]} sudah main ke Fake Bot ini ya 😊
    kali-kali kita main ${userData[2]} bareng ya!`
    jawaban.value = "siap thanks juga!"
}

function botEnd() {
    alert(`Terima kasih ${userData[0]} sudah berkunjung anda akan diarahkan ke halaman utama.`
    )
    window.location.reload()
}

