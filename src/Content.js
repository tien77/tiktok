import { useEffect, useState } from 'react'

// useEffect dùng trong 'Side effects'. thay đổi dữ liệu khi có tác động
/**
 * 1. Update DOM
 * 2. Call API
 * 3. listen DOM events
 *      - Scroll
 *      - resize
 * 4. Cleanup
 *  - cleanup function luôn được gọi trước khi unmound componont
 */     

// useEffect hook luôn được gọi khi component được Mounted
// useEffect() gọi và thực thi sau khi component Mounted render ra DOM
// Dùng cho logic khi đã render DOM UI cho người dùng, UI hiển thị, logic trong useEffect() thực thi sau đó

// 1. useEffect(callBacnk)
//     - luôn được gọi lại mỗi khi component re-render
// 2. useEffect(callBacnk, [])
//     - Chỉ gọi callBacnk 1 lần khi component mounted
// 3. useEffect(callBacnk, [deps])
//     - CallBack sẽ được gọi lại khi deps thay đổi, 
//      -( Khi component re-render lại thì  useEffect() kiểm tra xem deps trước và sau có khác nhau không, nếu khác thì sẽ gọi callback)

const menuTab = ['posts', 'comments', 'albums', 'photos', 'todos', 'users' ]

function Content(){
    const [menu, setMenu] = useState('posts')
    const [posts, setPosts] = useState([])
    const [showButton, setShowButton] = useState(false)
    const [widthWindow, setWidthWindow] = useState(window.innerWidth) // window.innerWidth lấy kích thước chiều rộng cữa sổ trình duyệt hiện tại

    useEffect( () => {
        fetch(`https://jsonplaceholder.typicode.com/${menu}`)
            .then(response => response.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [menu])

    useEffect( () => {

        const handleScroll = () => {
            // if (window.scrollY >= 200){
            //     setShowButton(true)
            // }else{
            //     setShowButton(false)
            // }
            // viết gọn code if else theo logic ở trên, vì (window.scrollY >= 200) sẽ trả về true false
            setShowButton(window.scrollY >= 200)
            //console.log('is scroll')
        }

        window.addEventListener("scroll", handleScroll)
        console.log('addEventListener')

        // cleanup function, return ra 1 function để xử lý clean
        return () => {
            window.removeEventListener("scroll", handleScroll)
            //console.log('unmound...')
            console.log('removeEventListener')
        }
    },[])
    
    // 
    useEffect( () => {

        const handleResize = () => {
            setWidthWindow(window.innerWidth)
        }
        window.addEventListener("resize", handleResize)

        // cleanup 
        return () => {
            window.removeEventListener("resize", handleResize)
        }

    }, [])
    return (

            <div>
                <h1>{widthWindow}</h1>
                {menuTab.map(itemMenu => (
                    <button 
                        key={itemMenu}
                        style = {menu === itemMenu ? {
                            color: '#fff',
                            backgroundColor: '#333'
                        } : {}}
                        onClick={ e => setMenu(itemMenu) }
                    > 
                        {itemMenu} 
                    </button>

                ) )}
                <ul>
                    {posts.map( post => (
                        <li key={post.id}>{ post.title || post.name }</li>
                    ) )}
                </ul>
                
                {showButton && (
                        <button
                            style = {showButton && {
                                position: 'fixed',
                                right: 20,
                                bottom: 20 
                            } }
                        >
                            goToTop
                        </button>
                    )
                }

            </div>
            


    )
}

export default Content