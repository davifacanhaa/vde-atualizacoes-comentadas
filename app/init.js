// Interatividade da landing (migrado do HTML estático): header sticky,
// FAQ accordion, lightbox do carrossel de amostras, reveal on scroll e CTAs.
export function initPage() {
  if (typeof window === 'undefined') return
  if (window.__vdeInit) return
  window.__vdeInit = true

  const header = document.getElementById('header')
  const sticky = document.getElementById('stickyCta')
  window.addEventListener('scroll', () => {
    const y = window.scrollY
    if (header) header.classList.toggle('scrolled', y > 10)
    if (sticky) sticky.classList.toggle('show', y > 700)
  })

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach((item) => {
    const q = item.querySelector('.faq-q')
    const a = item.querySelector('.faq-a')
    q.addEventListener('click', () => {
      const open = item.classList.contains('open')
      document.querySelectorAll('.faq-item').forEach((i) => {
        i.classList.remove('open')
        i.querySelector('.faq-a').style.maxHeight = null
      })
      if (!open) {
        item.classList.add('open')
        a.style.maxHeight = a.scrollHeight + 'px'
      }
    })
  })

  // Lightbox do carrossel de amostras (com navegação prev/next)
  const lb = document.getElementById('lightbox')
  if (lb) {
    const lbImg = document.getElementById('lbImg')
    const lbCounter = document.getElementById('lbCounter')
    const matPages = [...document.querySelectorAll('.mat-page:not(.locked)')]
    const matSrcs = matPages.map((el) => el.getAttribute('data-full'))
    const matLabels = matPages.map((el) => {
      const n = el.querySelector('.pg-num')
      return n ? n.textContent.trim() : ''
    })
    let lbIndex = 0
    const showLb = (i) => {
      lbIndex = (i + matSrcs.length) % matSrcs.length
      lbImg.src = matSrcs[lbIndex]
      lbCounter.textContent =
        matLabels[lbIndex] + ' · ' + (lbIndex + 1) + '/' + matSrcs.length
    }
    const openLb = (i) => {
      showLb(i)
      lb.classList.add('open')
      document.body.style.overflow = 'hidden'
    }
    const closeLb = () => {
      lb.classList.remove('open')
      document.body.style.overflow = ''
      lbImg.src = ''
    }
    matPages.forEach((el, i) => el.addEventListener('click', () => openLb(i)))
    document.getElementById('lbClose').addEventListener('click', closeLb)
    document
      .getElementById('lbPrev')
      .addEventListener('click', (e) => {
        e.stopPropagation()
        showLb(lbIndex - 1)
      })
    document
      .getElementById('lbNext')
      .addEventListener('click', (e) => {
        e.stopPropagation()
        showLb(lbIndex + 1)
      })
    lb.addEventListener('click', (e) => {
      if (e.target === lb) closeLb()
    })
    document.addEventListener('keydown', (e) => {
      if (!lb.classList.contains('open')) return
      if (e.key === 'Escape') closeLb()
      else if (e.key === 'ArrowLeft') showLb(lbIndex - 1)
      else if (e.key === 'ArrowRight') showLb(lbIndex + 1)
    })
  }

  // Reveal on scroll
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          io.unobserve(e.target)
        }
      })
    },
    { threshold: 0.12 }
  )
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el))

  // Placeholders de checkout
  document.querySelectorAll('[data-checkout]').forEach((el) => {
    el.addEventListener('click', (ev) => {
      ev.preventDefault()
      const plan = el.getAttribute('data-checkout')
      alert(
        'Integrar checkout do plano: ' +
          plan +
          '\n\n(Substitua pelo link do seu gateway: Hotmart, Kiwify, Stripe, etc.)'
      )
    })
  })
}
