import dunePoster from '../assets/dune_2.png';
import deadpoolPoster from '../assets/deadpool_wolverine.png';
import insideOutPoster from '../assets/inside_out_2.png';

export const movies = [
    {
        id: 1,
        slug: 'dune-2',
        title: 'Дюна: Часть вторая',
        poster: dunePoster,
        info: {
            genre: 'Фантастика, Боевик',
            director: 'Дени Вильнёв',
            cast: 'Тимоти Шаламе, Зендея, Ребекка Фергюсон',
            country: 'США',
            premiere: '2024'
        },
        description: 'Пол Атрейдес объединяется с Чани и фрименами, чтобы отомстить заговорщикам, уничтожившим его семью. Ему предстоит столкнуться с выбором между любовью всей своей жизни и судьбой известной вселенной, чтобы предотвратить ужасное будущее, которое может предвидеть только он.',
        videoThumbnail: dunePoster,
        videoUrl: 'https://rutube.ru/video/bd24fd2e866b196a7e53324a8289f7d6/'
    },
    {
        id: 2,
        slug: 'deadpool-wolverine',
        title: 'Дэдпул и Росомаха',
        poster: deadpoolPoster,
        info: {
            genre: 'Фантастика, Боевик, Комедия',
            director: 'Шон Леви',
            cast: 'Райан Рейнольдс, Хью Джекман',
            country: 'США',
            premiere: '2024'
        },
        description: 'Уэйд Уилсон попадает в организацию «Управление временными изменениями», что вынуждает его вернуться к своему альтер-эго Дэдпулу и изменить историю с помощью Росомахи.',
        videoThumbnail: deadpoolPoster,
        videoUrl: 'https://rutube.ru/video/105f7e0f1afe9fc8adb168cacccccde9/'
    },
    {
        id: 3,
        slug: 'inside-out-2',
        title: 'Головоломка 2',
        poster: insideOutPoster,
        info: {
            genre: 'Мультфильм, Семейный, Комедия',
            director: 'Келси Манн',
            cast: 'Эми Полер, Майя Хоук',
            country: 'США',
            premiere: '2024'
        },
        description: 'Головной отдел мозга Райли внезапно подвергается капитальному ремонту в тот момент, когда необходимо освободить место для чего-то совершенно неожиданного: новых эмоций. Радость, Печаль, Гнев, Страх и Брезгливость уже давно успешно руководят эмоциональными процессами, поэтому для них появление Тревожности становится внезапным.',
        videoThumbnail: insideOutPoster,
        videoUrl: 'https://rutube.ru/video/e9e944c1f489ed4a099ce139e6fa52bc/'
    }
];
