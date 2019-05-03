import React, { Component } from 'react';
import './Detail.css';
import { connect } from 'react-redux';
import { update_detail } from '../action/index';
import { withRouter } from 'react-router';

class Detail extends Component {
  // detail_link_click() {
  //   document.querySelector('.detail_link_block').classList.toggle('detail_link_block_none');
  // }

  state = { loading: this.props.loading };
  componentDidMount() {
    this.setState({ loading: true });

    let source = this.props.source;
    let id = this.props.id;

    fetch(`http://localhost:80/find?source=${source}&id=${id}`)
      .then(response => response.json())
      .then(e => {
        this.props.update_detail(e.data[0]);
        setTimeout(() => {
          this.setState({ loading: false });
        }, 1000);
      });
  }
  render() {
    console.log(this.props);
    let content;
    if (this.state.loading) {
      content = (
        <div className='bouncing-loader'>
          <div />
          <div />
          <div />
        </div>
      );
    } else {
      if (this.props.detail.job_source === '104') {
        content = (
          <div className='detail_inside'>
            <div className='detail_link_t'>
              <p>公司資訊</p>
            </div>
            <div className=''>
              <div className='detail_company_name detail_s_block'>
                <div className='detail_s_block_title'>
                  <p>公司名稱：</p>
                </div>
                <p className='detail_s_block_c'>{this.props.detail.company_name}</p>
              </div>

              <div className='detail_job_addr detail_s_block'>
                <div className='detail_s_block_title'>
                  <p>公司地址：</p>
                </div>
                <p className='detail_s_block_c'>{this.props.detail.address}</p>
              </div>
              <div className='detail_job_brief detail_s_block'>
                <div className='detail_s_block_title'>
                  <p>公司簡介：</p>
                </div>
                <p className='detail_s_block_c'>{this.props.detail.company_brief}</p>
              </div>

              <div className='detail_job_brief detail_s_block'>
                <div className='detail_s_block_title'>
                  <p>公司產品：</p>
                </div>
                <p className='detail_s_block_c'>{this.props.detail.company_product}</p>
              </div>

              <div className='detail_job_scale detail_s_block'>
                <div className='detail_s_block_title'>
                  <p>公司規模：</p>
                </div>
                <p className='detail_s_block_c'> {this.props.detail.company_scale === 'undefined' ? '未提供' : this.props.detail.company_scale}</p>
              </div>
            </div>
            <div className='detail_link_t'>
              <p>職缺資訊</p>
            </div>
            <div className='detail_job_scale detail_s_block'>
              <div className='detail_s_block_title'>
                <p>職缺名稱：</p>
              </div>
              <p className='detail_s_block_c'>{this.props.detail.job_name}</p>
            </div>
            <div className='detail_job_scale detail_s_block'>
              <div className='detail_s_block_title'>
                <p>應徵人數：</p>
              </div>
              <p className='detail_s_block_c'>{this.props.detail.apply_amount}</p>
            </div>
            <div className='detail_job_scale detail_s_block'>
              <div className='detail_s_block_title'>
                <p>學歷限制：</p>
              </div>
              <p className='detail_s_block_c'>{this.props.detail.degree}</p>
            </div>
            <div className='detail_job_scale detail_s_block'>
              <div className='detail_s_block_title'>
                <p>科系限制：</p>
              </div>
              <p className='detail_s_block_c'>{this.props.detail.industry}</p>
            </div>
            <div className='detail_job_scale detail_s_block'>
              <div className='detail_s_block_title'>
                <p>需求人數：</p>
              </div>
              <p className='detail_s_block_c'>{this.props.detail.require_amount}</p>
            </div>
            <div className='detail_job_scale detail_s_block'>
              <div className='detail_s_block_title'>
                <p>需要技能：</p>
              </div>
              <p className='detail_s_block_c'>{this.props.detail.skill}</p>
            </div>
            <div className='detail_job_scale detail_s_block'>
              <div className='detail_s_block_title'>
                <p>語言能力：</p>
              </div>
              <p className='detail_s_block_c'>{this.props.detail.language}</p>
            </div>
            <div className='detail_job_scale detail_s_block'>
              <div className='detail_s_block_title'>
                <p>工作經驗：</p>
              </div>
              <p className='detail_s_block_c'>{this.props.detail.work_exp}</p>
            </div>
            <div className='detail_job_scale detail_s_block'>
              <div className='detail_s_block_title'>
                <p>職缺介紹：</p>
              </div>
              <p className='detail_s_block_c'>{this.props.detail.job_description}</p>
            </div>
            <div className='detail_job_scale detail_s_block'>
              <div className='detail_s_block_title'>
                <p>出差外派：</p>
              </div>
              <p className='detail_s_block_c'>{this.props.detail.trip}</p>
            </div>
            <div className='detail_job_scale detail_s_block'>
              <div className='detail_s_block_title'>
                <p>福利政策：</p>
              </div>
              <p className='detail_s_block_c'>{this.props.detail.benefit}</p>
            </div>
            <div className='detail_job_scale detail_s_block'>
              <div className='detail_s_block_title'>
                <p>休假政策：</p>
              </div>
              <p className='detail_s_block_c'>{this.props.detail.holiday}</p>
            </div>
            <div className='detail_job_scale detail_s_block'>
              <div className='detail_s_block_title'>
                <p>工作形式：</p>
              </div>
              <p className='detail_s_block_c'>{this.props.detail.type}</p>
            </div>
            <div className='detail_job_scale detail_s_block'>
              <div className='detail_s_block_title'>
                <p>薪資範圍：</p>
              </div>
              <p className='detail_s_block_c'>{this.props.detail.salary}</p>
            </div>
            <div className='detail_job_scale detail_s_block'>
              <div className='detail_s_block_title'>
                <p>更新日期：</p>
              </div>
              <p className='detail_s_block_c'>{this.props.detail.update_date.slice(0, 10)}</p>
            </div>
            <div className='map_area' />
            <iframe
              className='detail_google_maps'
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCHKoH-wKQEpEMniWfRrxcBblm0OEowDU0&q=${this.props.detail.address}&language=zh-TW	`}
            />

            <div className='detail_link_block'>
              <a href={'https://' + this.props.detail.link_job} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                <div className='detail_link'>到 104 看工作</div>
              </a>
              <a href={'https://' + this.props.detail.link_company} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                <div className='detail_link'>到 104 看公司</div>
              </a>
            </div>
          </div>
        );
      } else if (this.props.detail.job_source === 'yourator') {
        content = (
          <div className='detail_inside'>
            <div className='detail_link_t'>
              <p>公司資訊</p>
            </div>

            <div className='detail_yourator_top'>
              <div className='detail_yourator_img_container'>
                <div className='detail_yourator_img'>
                  <img src={this.props.detail.company_picture} alt='' srcset='' />
                </div>
              </div>
              <div className='detail_yourator_text'>
                <div className='detail_company_name detail_s_block'>
                  <div className='detail_s_block_title'>
                    <p>公司名稱：</p>
                  </div>
                  <p className='detail_s_block_c'>{this.props.detail.company_name}</p>
                </div>
                <div className='detail_job_addr detail_s_block'>
                  <div className='detail_s_block_title'>
                    <p>公司地址：</p>
                  </div>
                  <p className='detail_s_block_c'>{this.props.detail.address}</p>
                </div>
                <div className='detail_job_brief detail_s_block'>
                  <div className='detail_s_block_title'>
                    <p>公司簡介：</p>
                  </div>
                  <p className='detail_s_block_c'>{this.props.detail.company_description === null ? '未提供' : this.props.detail.company_description}</p>
                </div>

                <div className='detail_job_scale detail_s_block'>
                  <div className='detail_s_block_title'>
                    <p>公司規模：</p>
                  </div>
                  <p className='detail_s_block_c'> {this.props.detail.company_scale === 'undefined' ? '未提供' : this.props.detail.company_scale}</p>
                </div>
                <div className='detail_job_scale detail_s_block'>
                  <div className='detail_s_block_title'>
                    <p>產業標籤：</p>
                  </div>
                  <p className='detail_s_block_c'> {this.props.detail.company_tag === 'undefined' ? '未提供' : this.props.detail.company_tag}</p>
                </div>
              </div>
            </div>

            <div className='detail_link_t'>
              <p>職缺資訊</p>
            </div>
            <div className='detail_job_scale detail_s_block'>
              <div className='detail_s_block_title'>
                <p>職缺名稱：</p>
              </div>
              <p className='detail_s_block_c'>{this.props.detail.job_name}</p>
            </div>

            <div className='detail_job_scale detail_s_block'>
              <div className='detail_s_block_title'>
                <p>需要技能：</p>
              </div>
              <p className='detail_s_block_c'>{this.props.detail.skill_tag}</p>
            </div>

            <div className='detail_job_scale detail_s_block'>
              <div className='detail_s_block_title'>
                <p>條件要求：</p>
              </div>
              <p className='detail_s_block_c'>{this.props.detail.requirements}</p>
            </div>

            <div className='detail_job_scale detail_s_block'>
              <div className='detail_s_block_title'>
                <p>職缺介紹：</p>
              </div>
              <p className='detail_s_block_c'>{this.props.detail.job_description}</p>
            </div>

            <div className='detail_job_scale detail_s_block'>
              <div className='detail_s_block_title'>
                <p>福利政策：</p>
              </div>
              <p className='detail_s_block_c'>{this.props.detail.benefits}</p>
            </div>

            <div className='detail_job_scale detail_s_block'>
              <div className='detail_s_block_title'>
                <p>薪資範圍：</p>
              </div>
              <p className='detail_s_block_c'>{this.props.detail.salary}</p>
            </div>

            <div className='map_area' />
            <iframe
              className='detail_google_maps'
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCHKoH-wKQEpEMniWfRrxcBblm0OEowDU0&q=${this.props.detail.address}&language=zh-TW	`}
            />

            <div className='detail_link_block'>
              <a href={this.props.detail.link_job} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                <div className='detail_link'>到 yourator 看工作</div>
              </a>
              <a href={this.props.detail.link_company} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                <div className='detail_link'>到 yourator 看公司</div>
              </a>
            </div>
          </div>
        );
      } else if (this.props.detail.job_source === 'meetjobs') {
        content = (
          <div className='detail_inside'>
            <div className='detail_link_t'>
              <p>公司資訊</p>
            </div>

            <div className='detail_meetjobs_top'>
              <div className='detail_meetjobs_img_container'>
                <div className='detail_meetjobs_img'>
                  <img src={this.props.detail.picture} alt='' srcset='' />
                </div>
              </div>
              <div className='detail_yourator_text'>
                <div className='detail_company_name detail_s_block'>
                  <div className='detail_s_block_title'>
                    <p>公司名稱：</p>
                  </div>
                  <p className='detail_s_block_c'>{this.props.detail.company_name}</p>
                </div>
                <div className='detail_job_addr detail_s_block'>
                  <div className='detail_s_block_title'>
                    <p>公司地址：</p>
                  </div>
                  <p className='detail_s_block_c'>{this.props.detail.address}</p>
                </div>

                <div className='detail_job_scale detail_s_block'>
                  <div className='detail_s_block_title'>
                    <p>公司規模：</p>
                  </div>
                  <p className='detail_s_block_c'>
                    {' '}
                    {this.props.detail.company_scale === 'null'
                      ? '未提供'
                      : this.props.detail.company_scale.indexOf('not') === -1
                      ? this.props.detail.company_scale + ' 人'
                      : '未提供'}
                  </p>
                </div>
              </div>
            </div>

            <div className='detail_link_t'>
              <p>職缺資訊</p>
            </div>
            <div className='detail_job_scale detail_s_block'>
              <div className='detail_s_block_title'>
                <p>職缺名稱：</p>
              </div>
              <p className='detail_s_block_c'>{this.props.detail.job_name}</p>
            </div>

            <div className='detail_job_scale detail_s_block'>
              <div className='detail_s_block_title'>
                <p>職缺介紹：</p>
              </div>
              <p className='detail_s_block_c' dangerouslySetInnerHTML={{ __html: this.props.detail.job_description }} />
            </div>

            <div className='detail_job_scale detail_s_block'>
              <div className='detail_s_block_title'>
                <p>技能標籤：</p>
              </div>
              <p className='detail_s_block_c'>{this.props.detail.skill_tag ? this.props.detail.skill_tag : '未提供'}</p>
            </div>
            <div className='detail_job_scale detail_s_block'>
              <div className='detail_s_block_title'>
                <p>薪資範圍：</p>
              </div>
              <p className='detail_s_block_c'>{this.props.detail.salary}</p>
            </div>
            <div className='detail_job_scale detail_s_block'>
              <div className='detail_s_block_title'>
                <p>更新日期：</p>
              </div>
              <p className='detail_s_block_c'>{this.props.detail.appear_date.slice(0, 10)}</p>
            </div>

            <div className='map_area' />

            <iframe
              className='detail_google_maps'
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCHKoH-wKQEpEMniWfRrxcBblm0OEowDU0&q=${this.props.detail.address}${
                this.props.detail.address.toString().match(/[\u3400-\u9FBF]/) ? '&language=zh-TW' : ''
              }`}
            />
            <div className='detail_link_block'>
              <a href={this.props.detail.link_job} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                <div className='detail_link'>到 meetjobs 看工作</div>
              </a>
              <a href={this.props.detail.link_company} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
                <div className='detail_link'>到 meetjobs 看公司</div>
              </a>
            </div>
          </div>
        );
      }
    }
    return <div className='detail_container'>{content}</div>;
  }
}

const mapStateToProps = state => {
  return { detail: state.detail };
};

// export default Contents;

const DetailWitRouter = withRouter(Detail);

export default connect(
  mapStateToProps,
  { update_detail: update_detail }
)(DetailWitRouter);
