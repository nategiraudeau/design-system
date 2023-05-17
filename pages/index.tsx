import React, { useState } from 'react';
import Icons from '../components/icons';
import Dropdown from '../components/dropdown';
import DialogButton from '../components/dialog-button';
import DialogAction from '../components/dialog-action';
import clsx from 'clsx';
import CircularLoadingIndicator from '../components/circular-loading-indicator';
import LoadingOverlay from '../components/loading-overlay';
import delay from '../utils/delay';
import { LinearProgress } from '@rmwc/linear-progress';

const Landing: React.FC = () => {

    const [switchState, setSwitchState] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loadingLinear, setLoadingLinear] = useState(false);
    const [loadingCircular, setLoadingCircular] = useState(false);

    return (
        <div>
            <div className="content-page">
                <div className="content-page__header">
                    <h2>Design System</h2>
                </div>
                <div className="content-page__body">
                    <br />
                    <h3>Buttons</h3>
                    <br />
                    <div className="row">
                        <div className="button button--primary">Primary</div>
                        <div className="h-spacing--lg"></div>
                        <div className="button">Default</div>
                        <div className="h-spacing--lg"></div>
                        <div className="button button--secondary">Alternate</div>
                    </div>
                    <br />
                    <br />
                    <div className="row">
                        <div className="button button--danger">Danger</div>
                        <div className="h-spacing--lg"></div>
                        <div className="button">
                            <Icons.CheckCircle size={18} />
                            <div className="h-spacing--sm"></div>
                            Icon
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <h3>Icon Buttons</h3>
                    <br />
                    <div className="row">
                        <small>Primary</small>
                        <div className="h-spacing--lg"></div>
                        <div className="icon-button icon-button--primary">
                            <Icons.Edit size={16} />
                        </div>
                        <div className="h-spacing--lg"></div>
                        <div className="h-spacing--lg"></div>
                        <small>Default</small>
                        <div className="h-spacing--lg"></div>
                        <div className="icon-button">
                            <Icons.CheckCircle size={16} />
                        </div>
                        <div className="h-spacing--lg"></div>
                        <div className="h-spacing--lg"></div>
                        <small>Favorite</small>
                        <div className="h-spacing--lg"></div>
                        <div className="icon-button favorite">
                            <Icons.CloudLightning size={16} />
                        </div>
                        <div className="h-spacing--lg"></div>
                        <div className="h-spacing--lg"></div>
                        <small>Disabled</small>
                        <div className="h-spacing--lg"></div>
                        <div className="icon-button disabled">
                            <Icons.CloudLightning size={16} />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <small>Large</small>
                        <div className="h-spacing--lg"></div>
                        <div className="icon-button lg">
                            <Icons.CloudLightning size={22} />
                        </div>
                        <div className="h-spacing--lg"></div>
                        <div className="h-spacing--lg"></div>
                        <small>Small</small>
                        <div className="h-spacing--lg"></div>
                        <div className="icon-button sm">
                            <Icons.CloudLightning size={12} />
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <h3>Dropdowns</h3>
                    <br />
                    <div className="row">
                        <div>Default</div>
                        <div className="h-spacing--sm"></div>
                        <Dropdown button={<div className="icon-button"><Icons.ChevronDown /></div>} children={_ => (
                            <div className="menu">
                                <div className="menu__link">
                                    <Icons.Trash className='menu__link__icon' size={14} />
                                    Item 1
                                </div>
                                <div className="menu__link">
                                    <Icons.User className='menu__link__icon' size={14} />
                                    Item 2
                                </div>
                                <div className="menu__link">
                                    <Icons.CheckCircle className='menu__link__icon' size={14} />
                                    Item 3
                                </div>
                            </div>
                        )} />
                        <div className="h-spacing--lg"></div>
                        <div>Overlap</div>
                        <div className="h-spacing--sm"></div>
                        <Dropdown overButton button={<div className="icon-button"><Icons.ChevronDown /></div>} children={_ => (
                            <div className="menu">
                                <div className="menu__link">
                                    <Icons.Trash className='menu__link__icon' size={14} />
                                    Item 1
                                </div>
                                <div className="menu__link">
                                    <Icons.User className='menu__link__icon' size={14} />
                                    Item 2
                                </div>
                                <div className="menu__link">
                                    <Icons.CheckCircle className='menu__link__icon' size={14} />
                                    Item 3
                                </div>
                            </div>
                        )} />
                        <div className="h-spacing--lg"></div>
                        <div>Right</div>
                        <div className="h-spacing--sm"></div>
                        <Dropdown alignment='top-right' button={<div className="icon-button"><Icons.ChevronDown /></div>} children={_ => (
                            <div className="menu">
                                <div className="menu__link">
                                    <Icons.Trash className='menu__link__icon' size={14} />
                                    Item 1
                                </div>
                                <div className="menu__link">
                                    <Icons.User className='menu__link__icon' size={14} />
                                    Item 2
                                </div>
                                <div className="menu__link">
                                    <Icons.CheckCircle className='menu__link__icon' size={14} />
                                    Item 3
                                </div>
                            </div>
                        )} />
                    </div>
                    <br />
                    <br />
                    <br />
                    <h3>Pop Ups</h3>
                    <br />
                    <div className="row">
                        <DialogButton
                            title="2-Button"
                            content="Click outside to close."
                            actions={[
                                (<DialogAction primary>Button 1</DialogAction>),
                                (<DialogAction>Button 2</DialogAction>),
                            ]}
                            barrierDismissible>
                            <div className="button">2-Button</div>
                        </DialogButton>
                        <div className="h-spacing--lg"></div>
                        <DialogButton
                            title="3-Button"
                            content="Click outside to close."
                            actions={[
                                (<DialogAction primary>Button 1</DialogAction>),
                                (<DialogAction danger>Button 2</DialogAction>),
                                (<DialogAction>Button 3</DialogAction>),
                            ]}
                            barrierDismissible>
                            <div className="button">3-Button</div>
                        </DialogButton>
                        <div className="h-spacing--lg"></div>
                        <DialogButton
                            actionsOrientation='column'
                            title="3-Button Vertical"
                            content="Click outside to close."
                            actions={[
                                (<DialogAction>Button 1</DialogAction>),
                                (<DialogAction danger>Button 2</DialogAction>),
                                (<DialogAction primary>Button 3</DialogAction>),
                            ]}
                            barrierDismissible>
                            <div className="button">3-Button Vertical</div>
                        </DialogButton>
                        <div className="h-spacing--lg"></div>
                        <DialogButton
                            actionsOrientation='column'
                            title="No Buttons"
                            content="Click outside to close."
                            barrierDismissible>
                            <div className="button">No Buttons</div>
                        </DialogButton>
                    </div>
                    <br />
                    <br />
                    <br />
                    <h3>Switch</h3>
                    <br />
                    <div>
                        <div
                            className={clsx('switch', switchState ? 'switch--true' : '')}
                            onClick={() => {
                                setSwitchState(!switchState);
                            }}></div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <h3>Loading Indicators</h3>
                    <br />
                    <div>
                        <small>Circular</small>
                        <br />
                        <br />
                        <CircularLoadingIndicator size={100} />
                        <br />
                        <br />
                        <small>Linear</small>
                        <br />
                        <br />
                        <LinearProgress />
                        <br />
                        <br />
                        <br />
                        <div className="button" style={{width: 275}} onClick={async () => {
                            setLoading(true);
                            await delay(1000);
                            setLoading(false);
                        }}>
                            Show Default Loading Overlay (1s)
                        </div>
                        <br />
                        <div className="button" style={{width: 275}} onClick={async () => {
                            setLoadingLinear(true);
                            await delay(3000);
                            setLoadingLinear(false);
                        }}>
                            Show Linear Loading Overlay (3s)
                        </div>
                        <br />
                        <div className="button" style={{width: 275}} onClick={async () => {
                            setLoadingCircular(true);
                            await delay(3000);
                            setLoadingCircular(false);
                        }}>
                            Show Circular Loading Overlay (3s)
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
            </div>
            <LoadingOverlay loading={loading} />
            <LoadingOverlay type="linear" loading={loadingLinear} />
            <LoadingOverlay type="circular" loading={loadingCircular} />
        </div>
    );
}

export default Landing;