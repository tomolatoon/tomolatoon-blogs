import { GetServerSidePropsContext, GetStaticPropsContext } from "next";

export const getRoutingArgument = (context: GetStaticPropsContext | GetServerSidePropsContext, routingParam: string) => {
    if (typeof context.params === "undefined") return null;
    const params = context.params;

    if (typeof params[routingParam] === "undefined") return null;
    return params[routingParam];
}