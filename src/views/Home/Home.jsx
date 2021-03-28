import React , {useState} from 'react';
import './Home.scss';
import { Container, Icon, Header, Footer, Content, IconButton, FlexboxGrid } from 'rsuite';
import NotificationItem from '../../components/NotificationItem';
import Navigation from '../../components/Navigation';
import GroupSection from '../../components/GroupSection';
import { Database } from '../../constants/data';

const Home = () => {

    const Data = Database || [];

    const sortData = (property) => {
        let sortOrder = 1;
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return (a,b) => {
            let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }

    const [filtering, setFiltering] = useState([]);
    const [sorting, setSorting] = useState('id');
    const [groupToggle, setGroupToggle] = useState(false);
    const [grouping, setGrouping] = useState('type');
    const [page, setPage] = useState(1);

    const FilteredData = (filtering.length ? Data.filter((notif) => filtering.some(i => notif.type.includes(i))) : Data);
    const SortedFiltered = FilteredData.sort(sortData(sorting));

    const roundNumber = (x) => Math.ceil(x/8)*8;

    const startPage = (page === 1 ? page : page + ((page-1)*7))-2;
    const endPage = (page * 8);
    const maxPages = roundNumber(SortedFiltered.length) / 8;

    const pagesFiltered = SortedFiltered.filter((_, index) => index > startPage && index < endPage);

    return (
        <Container className='homeWrapper'>
          <Navigation 
            FilterValue = {(filterData) => {setFiltering(filterData)}}
            SortingValue = {(sortingData) => {setSorting(sortingData)}}
            GroupToggle = {(groupValue) => {setGroupToggle(groupValue)}}
            GroupingValue = {(groupingData) => {setGrouping(groupingData)}}
          />
          <Container>
            <Header className='headerStyle'>
              <h2>Notifications</h2>
            </Header>
            <Content className='contentWrapper'>
                <div>
                    {groupToggle ? <GroupSection groupBy={grouping} data={SortedFiltered} /> : 
                    pagesFiltered.map((Notif,index) => {
                     return (
                        <NotificationItem
                            ID = {Notif.ID}
                            text = {Notif.text}
                            type = {Notif.type}
                            addInfo = {Notif.addInfo}
                            read = {Notif.read}
                        />
                        )
                     })
                    }
                </div>
            </Content>
            <Footer className='show-grid'>
                <FlexboxGrid justify="center">
                <IconButton icon={<Icon icon="left" />} placement="left" onClick={() => {setPage(page !== 1 ? page-1 : 1)}}/>
                <p className='pageFont'>{page}</p>
                <IconButton icon={<Icon icon="right" />} placement="right" onClick={() => {setPage(page < maxPages ? page+1 : maxPages)}}/>
                </FlexboxGrid>
            </Footer>
          </Container>
        </Container>
    );
}

export default Home;