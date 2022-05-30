import { ThreeDots } from 'react-loader-spinner';

export default function Loader() {

    const data = [
        {
            Component: ThreeDots,
            props: {
                color: "#52B6FF",
                height: 100,
                width: 110,
                radius: 40
            },
            name: "ThreeDots"
        }
    ];
    return (
        <div className="row">
            {data.map((loader, index) => (
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-2 p-5">
                    <div
                        data-tip={loader.name}
                        data-for="happyFace"
                        key={loader.name + index}
                        className="loaderBox"
                    >
                        <loader.Component {...loader.props} />
                    </div>
                </div>
            ))}
        </div>
    )
}